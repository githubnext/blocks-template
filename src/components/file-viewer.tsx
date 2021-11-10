import { useFileContent } from "../hooks";
import { AppInnerProps } from "./app-inner";

import { ErrorState } from "./error-state";
import { LoadingState } from "./loading-state";

import { SandpackRunner } from "@codesandbox/sandpack-react";

import { useRawImportSource } from "../hooks";
import { FileViewerProps } from "@githubnext/utils";

type SandboxedViewerProps = FileViewerProps & {
  viewerId: string;
  dependencies: object;
};

function SandboxedViewer(props: SandboxedViewerProps) {
  const { context, viewerId, content, dependencies } = props;
  const { data, status } = useRawImportSource(viewerId, dependencies);

  if (status === "loading") return <LoadingState />;
  if (status === "error") return <ErrorState />;

  if (status === "success" && data) {
    const injectedSource = `
      ${data.source}
      export default function WrappedViewer() {
        return <Viewer context={${JSON.stringify(
          context
        )}} content={${JSON.stringify(content)}} />
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
          options={{
            showNavigator: false,
          }}
        />
      </div>
    );
  }

  return null;
}

export function FileViewer(
  props: Omit<AppInnerProps, "onReset" | "viewerType">
) {
  const { viewer, dependencies, urlParts } = props;

  if (
    urlParts.filepathtype !== "blob" ||
    !urlParts.owner ||
    !urlParts.name ||
    !urlParts.ref ||
    !urlParts.filepath
  ) {
    throw new Error(
      "Unable to parse this GitHub URL. Are you sure you've linked to a file and not a directory?"
    );
  }

  const { owner, name, ref, filepath } = urlParts;

  const { data, status } = useFileContent({
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
        {...data}
        dependencies={dependencies}
        viewerId={viewer}
        metadata={defaultMetadata}
        onUpdateMetadata={() => {}}
        onRequestUpdateContent={() => {}}
      />
    );
  }

  return null;
}

const defaultMetadata = {};
