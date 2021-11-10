import { SandpackRunner } from "@codesandbox/sandpack-react";

import { TreeItem, useFolderContent, useRawImportSource } from "../hooks";
import { AppInnerProps } from "./app-inner";
import { ErrorState } from "./error-state";
import { LoadingState } from "./loading-state";

interface SandboxedViewerProps {
  viewerId: string;
  meta: ViewerMeta;
  tree: TreeItem[];
  dependencies: object;
}

function SandboxedViewer(props: SandboxedViewerProps) {
  const { viewerId, meta, dependencies, tree } = props;
  const { data, status } = useRawImportSource(viewerId, dependencies);

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

export function FolderViewer(
  props: Omit<AppInnerProps, "onReset" | "viewerType">
) {
  const { viewerId, urlParts, dependencies } = props;

  if (urlParts.filepathtype === "blob") {
    throw new Error(
      "Unable to parse this GitHub URL. Are you sure you've linked to a directory and not a file?"
    );
  }

  if (!urlParts.owner || !urlParts.name) {
    throw new Error("Unable to parse this GitHub URL");
  }

  const { owner, name, filepath, ref } = urlParts;

  const { data, status } = useFolderContent({
    owner: owner,
    repo: name,
    path: filepath,
    fileRef: ref,
  });

  if (status === "loading") return <LoadingState />;
  if (status === "error") return <ErrorState />;
  if (status === "success" && data) {
    const meta = {
      owner: owner,
      repo: name,
      path: filepath,
      language: "",
      sha: ref,
      username: "",
      download_url: "",
      name: "",
    };

    return (
      <SandboxedViewer
        tree={data}
        meta={meta}
        dependencies={dependencies}
        viewerId={viewerId}
      />
    );
  }

  return null;
}
