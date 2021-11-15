import { useCallback } from "react";
import { useFileContent } from "../hooks";
import { AppInnerProps } from "./app-inner";
import { ErrorState } from "./error-state";
import { LoadingState } from "./loading-state";
import { SandboxedViewer } from "@githubnext/utils";

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

  const getFileContent = useCallback(async (path: string) => {
    const importType = path.endsWith(".css") ? "inline" : "raw";
    const contents = await import(
      /* @vite-ignore */ `../${path}?${importType}`
    );
    return contents.default;
  }, []);

  if (status === "loading") return <LoadingState />;
  if (status === "error") return <ErrorState />;
  if (status === "success" && data) {
    return (
      <div className="sandbox-wrapper h-full w-full">
        <SandboxedViewer
          getFileContent={getFileContent}
          contents={data.content}
          context={{
            theme: "light",
            ...data.context,
            name,
          }}
          dependencies={dependencies}
          viewer={viewer}
          metadata={defaultMetadata}
          onUpdateMetadata={() => {
            return new Promise(() => {});
          }}
          session={{ token: "" }}
        />
      </div>
    );
  }

  return null;
}

const defaultMetadata = {};
