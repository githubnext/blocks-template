import { useMemo, useState } from "react";
import parseUrl from "parse-github-url";
import { SandpackRunner } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

const modules = import.meta.glob("./viewers/**/*");

import { useFileContent } from "./hooks";
import { useQuery } from "react-query";

interface AppInnerProps {
  viewer: string;
  repo: string;
  owner: string;
  path: string;
  branch: string;
}

function findPackageNamesInSourceCode(code: string, packageNames: string[]) {
  return packageNames.filter((pkg) => code.includes(pkg));
}

function separatePathFromFile(path: string) {
  const parts = path.split("/");
  const file = parts.pop();
  const dir = parts.join("/");
  return { file, dir };
}

function useRawImportSource(viewer: string) {
  return useQuery(
    viewer,
    async () => {
      const { dir, file } = separatePathFromFile(viewer);

      const viewerSource = await import(`${viewer}?raw`);
      const pkgJson = await import("../package.json");

      const allOtherFilePaths = Object.keys(modules)
        .filter((module) => {
          return module.startsWith(dir);
        })
        .filter((module) => file && !module.endsWith(file));

      const allOtherFileSources = await Promise.all(
        allOtherFilePaths.map(async (p) => {
          const importType = p.endsWith(".css") ? "inline" : "raw";

          return {
            path: p,
            source: await import(`${p}?${importType}`),
          };
        })
      );

      const packageNames = Object.keys(pkgJson.dependencies);

      // Needs to use all the things
      const helperPackages = allOtherFileSources.flatMap((f) =>
        findPackageNamesInSourceCode(f.source.default, packageNames)
      );

      const entryPackages = findPackageNamesInSourceCode(
        viewerSource.default,
        packageNames
      );

      const allPackages = new Set([...helperPackages, ...entryPackages]);

      return {
        source: viewerSource.default,
        files: allOtherFileSources.reduce<Record<string, string>>(
          (acc, next) => {
            const { file } = separatePathFromFile(next.path);
            acc[`/${file as string}`] = next.source.default;
            return acc;
          },
          {}
        ),
        dependencies: Array.from(allPackages).reduce<Record<string, string>>(
          (acc, next) => {
            // @ts-ignore
            acc[next] = pkgJson.dependencies[next];
            return acc;
          },
          {}
        ),
      };
    },
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: 0,
    }
  );
}

interface SandboxedViewerProps {
  viewer: string;
  meta: ViewerMeta;
  originalContent: string;
}

function SandboxedViewer(props: SandboxedViewerProps) {
  const { viewer, originalContent, meta } = props;
  const { data, status } = useRawImportSource(viewer);

  if (status === "loading")
    return (
      <div className="p-4">
        <p className="text-sm">Loading...</p>
      </div>
    );
  if (status === "error")
    return (
      <div className="p-4">
        <p className="text-sm">Error!</p>
      </div>
    );

  if (status === "success" && data) {
    const injectedSource = `
      ${data.source}
      export default function WrappedViewer() {
        return <Viewer meta={${JSON.stringify(meta)}} content={${JSON.stringify(
      originalContent
    )}} />
      }
    `;

    return (
      <div className="flex-1 h-full sandbox-wrapper">
        <SandpackRunner
          template="react"
          code={injectedSource}
          customSetup={{
            dependencies: data.dependencies,
            files: data.files,
          }}
        />
      </div>
    );
  }

  return null;
}

function AppInner(props: AppInnerProps) {
  const { viewer, repo, owner, path, branch } = props;
  const { data, status } = useFileContent({
    owner: owner,
    repo: repo,
    path: path,
    fileRef: branch,
  });

  if (status === "loading")
    return (
      <div className="p-4">
        <p className="text-sm">Loading...</p>
      </div>
    );

  if (status === "error")
    return (
      <div className="p-4">
        <p className="text-sm">Error: {data}</p>
      </div>
    );

  if (status === "success" && data) {
    const meta = {
      owner: owner,
      repo: repo,
      path: path,
      language: "",
      sha: branch,
      username: "",
      download_url: "",
      name: "",
    };

    return (
      <SandboxedViewer
        meta={meta}
        originalContent={data[0].content || ""}
        viewer={viewer}
      />
    );
  }

  return null;
}

function App() {
  const [selectedViewer, setSelectedViewer] = useState("");
  const [fileUrl, setFileUrl] = useState(
    "https://github.com/githubocto/flat/blob/main/src/git.ts"
  );

  const urlParts = useMemo(() => {
    if (!fileUrl) return null;

    try {
      return parseUrl(fileUrl);
    } catch (e) {
      console.log(e);
      return null;
    }
  }, [fileUrl]);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="bg-gray-100 border-b p-4 flex-shrink-0 flex items-center">
        <div className="w-64">
          <label className="text-xs font-medium block mb-1" htmlFor="url">
            GitHub File URL
          </label>
          <input
            id="url"
            className="form-input w-full text-sm"
            placeholder="Enter GitHub file URL"
            value={fileUrl}
            onChange={(e) => {
              setFileUrl(e.target.value);
            }}
          />
        </div>
        <div className="ml-4">
          <label className="text-xs font-medium block mb-1" htmlFor="viewer">
            Viewer
          </label>
          <select
            onChange={(e) => {
              setSelectedViewer(e.target.value);
            }}
            value={selectedViewer}
            className="form-select text-sm"
            name="viewer"
            id="viewer"
          >
            <option disabled value="">
              Select a viewer
            </option>
            {Object.keys(modules)
              .filter((module) => module.endsWith("index.tsx"))
              .map((key) => (
                <option value={key} key={key}>
                  {key}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {(!selectedViewer || !fileUrl) && (
          <div className="p-4">
            <p className="text-sm">
              Please select a viewer and enter a file path.
            </p>
          </div>
        )}
        {selectedViewer && fileUrl && urlParts && (
          <AppInner
            viewer={selectedViewer}
            owner={urlParts.owner as string}
            repo={urlParts.name as string}
            path={urlParts.filepath as string}
            branch={urlParts.branch as string}
          />
        )}
      </div>
    </div>
  );
}

export default App;
