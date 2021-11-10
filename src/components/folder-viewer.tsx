import { SandpackRunner } from "@codesandbox/sandpack-react";
import { FolderViewerProps } from "@githubnext/utils";

import { useFolderContent, useRawImportSource } from "../hooks";
import { AppInnerProps } from "./app-inner";
import { ErrorState } from "./error-state";
import { LoadingState } from "./loading-state";

type SandboxedViewerProps = FolderViewerProps & {
  viewerId: string;
  dependencies: object;
};

function SandboxedViewer(props: SandboxedViewerProps) {
  const { context, tree, viewerId, dependencies } = props;
  const { data, status } = useRawImportSource(viewerId, dependencies);

  if (status === "loading") return <LoadingState />;
  if (status === "error") return <ErrorState />;

  if (status === "success" && data) {
    const injectedSource = `
      ${data.source}
      export default function WrappedViewer() {
        return <Viewer context={${JSON.stringify(
          context
        )}} tree={${JSON.stringify(tree)}} />
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
    return (
      <SandboxedViewer
        {...data}
        dependencies={dependencies}
        viewerId={viewerId}
        metadata={defaultMetadata}
        onUpdateMetadata={noop}
        onRequestUpdateContent={noop}
      />
    );
  }

  return null;
}

const defaultMetadata = {};
const noop = () => {};
