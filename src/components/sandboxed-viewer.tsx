import { useQuery, } from "react-query";
// @ts-ignore
import parseStaticImports from "parse-static-imports";
import { SandpackRunner } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { useMemo } from "react";

interface Viewer {
  type: string;
  title: string;
  description: string;
  entry: string;
  extensions?: string[];
}

interface SandboxedViewerProps {
  viewer: Viewer;
  getFileContent: GetFileContent;
  contents?: string;
  tree?: RepoFiles;
  context: {
    language?: string;
    theme: string;
    name: string;
    download_url: string;
    repo: string;
    owner: string;
    path: string;
    sha: string;
    username: string;
  };
  dependencies: Record<string, string>;
  metadata: any;
  onUpdateMetadata: () => Promise<void>;
  session: { token: string };
}

export function SandboxedViewer(props: SandboxedViewerProps) {
  const { viewer, contents, tree, dependencies, context, getFileContent } = props;

  const { data, status } = useViewerContentAndDependencies(viewer.entry, getFileContent);

  const [viewerContent, ...otherFiles] = data || []
  const rootPath = "src" + (viewer.entry || "").split("/").slice(0, -1).join("/")
  const otherFilesMap = useMemo(() => {
    return otherFiles.reduce<Record<string, string>>((acc, file) => {
      const relativePath = file.path.replace(rootPath, "")
      acc[relativePath] = file.contents;
      return acc;
    }, {})
  }, [otherFiles])

  const relevantDependencies = useMemo(() => {
    if (!data) return {}
    const allDependencyNames = Object.keys(dependencies)
    const allFileContents = data.map(d => d.contents).join("/n")
    const relevantDependencyNames = allDependencyNames.filter(d => allFileContents.includes(d))
    return relevantDependencyNames.reduce<Record<string, string>>((acc, d) => {
      acc[d] = dependencies[d]
      return acc;
    }, {})
  }, [data])

  if (!viewerContent?.contents) return <div className="p-4">Loading...</div>;

  if (status === "loading") return <div className="p-4">Loading...</div>;
  if (status === "error") return <div className="p-4">Error...</div>;

  if (!contents && !tree) return null

  if (status === "success" && data) {
    const injectedSource = `
      ${viewerContent.contents}
      export default function WrappedViewer() {
        return <Viewer context={${JSON.stringify(
      context
    )}} content={${JSON.stringify(contents)}} tree={${JSON.stringify(tree)}} />
      }
    `;

    return (
      <div className="flex-1 h-full sandbox-wrapper">
        <SandpackRunner
          template="react"
          code={injectedSource}
          customSetup={{
            dependencies: relevantDependencies,
            files: otherFilesMap,
          }}
          options={{
            showNavigator: false,
          }}
        />
      </div>
    );
  }
  return null
}


interface FileContext {
  download_url: string;
  file: string;
  path: string;
  repo: string;
  owner: string;
  sha: string;
  username: string;
}

type Import = {
  moduleName: string;
  starImport: string;
  namedImports: {
    name: string;
    alias: string;
  }[];
  defaultImport: string;
  sideEffectOnly: boolean;
};

type RepoFiles = {
  path?: string;
  mode?: string;
  type?: string;
  sha?: string;
  size?: number;
  url?: string;
}[]

type FileParams = {
  contents: string;
  path: string;
}


type LightFileData = {
  contents: string;
  path: string;
}
type GetFileContent = (path: string) => Promise<string>;
export interface UseFileContentParams {
  path: string;
}


export function useViewerContentAndDependencies(
  path: string,
  getFileContent: GetFileContent
) {
  return useQuery(
    ["viewer-content-and-dependencies", path],
    () =>
      getFileContentsAndDependencies(path, path, getFileContent),
    {
      enabled: Boolean(path),
      refetchOnWindowFocus: false,
      retry: false,
    }
  );
}

const combinePaths = (path1: string, path2: string): string => {
  return path1.split("/").slice(0, -1).join("/") + path2.slice(1);
};

const getRelativePath = (rootPath: string, path: string): string => {
  const rootPathFolder = rootPath.split("/").slice(0, -1).join("/")
  return path.replace(rootPathFolder, "")
}

export async function getFileContentsAndDependencies(
  path: string,
  entryPath: string,
  getFileContent: GetFileContent,
): Promise<LightFileData[]> {
  const fileContents = await getFileContent(path);
  const file = {
    contents: fileContents,
    path: getRelativePath(entryPath, path),
  }
  const imports = await parseStaticImports(fileContents);
  // TODO: do we need to make this smarter?
  const relativeImports = imports.filter((d: Import) =>
    d.moduleName.startsWith(".")
  );
  let otherFiles = [] as LightFileData[];
  for (const relativeImport of relativeImports) {
    const filePath = relativeImport.moduleName;
    const absoluteFilePath = combinePaths(path, filePath);
    const importFileData = await getFileContentsAndDependencies(absoluteFilePath, entryPath, getFileContent);
    otherFiles = [...otherFiles, ...importFileData];
  }

  return [file, ...otherFiles];
}
