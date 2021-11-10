import { SandpackRunner } from "@codesandbox/sandpack-react";

import { TreeItem, useFolderContent, useRawImportSource } from "../hooks";
import { AppInnerProps } from "./app-inner";
import { ErrorState } from "./error-state";
import { LoadingState } from "./loading-state";

interface SandboxedViewerProps {
  viewer: string;
  meta: ViewerMeta;
  tree: TreeItem[];
  dependencies: object;
}

function SandboxedViewer(props: SandboxedViewerProps) {
  const { viewer, meta, dependencies, tree } = props;
  const { data, status } = useRawImportSource(viewer, dependencies);

  if (status === "loading") return <LoadingState />;
  if (status === "error") return <ErrorState />;

  if (status === "success" && data) {
    const injectedSource = `
      ${data.source}
      export default function WrappedViewer() {
        return <Viewer meta={${JSON.stringify(meta)}} tree={${JSON.stringify(
      tree
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

export function FolderViewer(props: Omit<AppInnerProps, "onReset">) {
  const { viewer, urlParts, dependencies } = props;

  if (urlParts.filepath) {
    throw new Error(
      "Unable to parse this GitHub URL. Are you sure you've linked to a directory and not a file?"
    );
  }

  if (!urlParts.owner || !urlParts.name || !urlParts.branch || !urlParts.path) {
    throw new Error("Unable to parse this GitHub URL");
  }

  const { owner, name, path, branch } = urlParts;

  const { data, status } = useFolderContent({
    owner: owner,
    repo: name,
    path: path,
    fileRef: branch,
  });

  if (status === "loading") return <LoadingState />;
  if (status === "error") return <ErrorState />;
  if (status === "success" && data) {
    const meta = {
      owner: owner,
      repo: name,
      path: path,
      language: "",
      sha: branch,
      username: "",
      download_url: "",
      name: "",
    };

    return (
      <SandboxedViewer
        tree={data}
        meta={meta}
        dependencies={dependencies}
        viewer={viewer}
      />
    );
  }

  return null;
}
