import { useMemo, useState } from "react";
import parseUrl from "parse-github-url";
import { SandpackRunner } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

import { useFileContent, usePackageJson, useRawImportSource } from "./hooks";

interface AppInnerProps {
  viewer: string;
  repo: string;
  owner: string;
  path: string;
  branch: string;
  dependencies: object;
}

interface SandboxedViewerProps {
  viewer: string;
  meta: ViewerMeta;
  originalContent: string;
  dependencies: object;
}

function SandboxedViewer(props: SandboxedViewerProps) {
  const { viewer, originalContent, meta, dependencies } = props;
  const { data, status } = useRawImportSource(viewer, dependencies);

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
  const { viewer, repo, owner, path, branch, dependencies } = props;
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
        dependencies={dependencies}
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

  const { data: pkgJson, status } = usePackageJson();

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
            disabled={!pkgJson || status !== "success"}
            className="form-select text-sm"
            name="viewer"
            id="viewer"
          >
            <option disabled value="">
              Select a viewer
            </option>
            <optgroup label="Folder Viewers">
              {pkgJson &&
                pkgJson.viewers
                  .filter((v) => v.type === "folder")
                  .map((viewer, index) => {
                    return (
                      <option value={viewer.entry} key={index}>
                        {viewer.title}
                      </option>
                    );
                  })}
            </optgroup>
            <optgroup label="File Viewers">
              {pkgJson &&
                pkgJson.viewers
                  .filter((v) => v.type === "file")
                  .map((viewer, index) => {
                    return (
                      <option value={viewer.entry} key={index}>
                        {viewer.title}
                      </option>
                    );
                  })}
            </optgroup>
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
            dependencies={pkgJson?.dependencies as object}
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
