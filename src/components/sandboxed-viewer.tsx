import { SandpackRunner } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

import { useRawImportSource } from "../hooks";

interface SandboxedViewerProps {
  viewer: string;
  meta: ViewerMeta;
  originalContent: string;
  dependencies: object;
}

export function SandboxedViewer(props: SandboxedViewerProps) {
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
