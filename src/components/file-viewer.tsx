import { useFileContent } from "../hooks";
import { AppInnerProps } from "./app-inner";

import { ErrorState } from "./error-state";
import { LoadingState } from "./loading-state";

import { SandpackRunner } from "@codesandbox/sandpack-react";

import { useRawImportSource } from "../hooks";

interface SandboxedViewerProps {
  viewer: string;
  meta: ViewerMeta;
  originalContent: string;
  dependencies: object;
}

function SandboxedViewer(props: SandboxedViewerProps) {
  const { viewer, originalContent, meta, dependencies } = props;
  const { data, status } = useRawImportSource(viewer, dependencies);

  if (status === "loading") return <LoadingState />;
  if (status === "error") return <ErrorState />;

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

export function FileViewer(props: Omit<AppInnerProps, "onReset">) {
  const { viewer, dependencies, urlParts } = props;

  if (
    !urlParts.owner ||
    !urlParts.name ||
    !urlParts.branch ||
    !urlParts.filepath
  ) {
    throw new Error(
      "Unable to parse this GitHub URL. Are you sure you've linked to a file and not a directory?"
    );
  }

  const { owner, name, branch, filepath } = urlParts;

  const { data, status } = useFileContent({
    owner: owner,
    repo: name,
    path: filepath,
    fileRef: branch,
  });

  if (status === "loading") return <LoadingState />;
  if (status === "error") return <ErrorState />;
  if (status === "success" && data) {
    const meta = {
      owner: owner,
      repo: name,
      path: filepath,
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
