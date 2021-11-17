import { useCallback } from "react";
import { useFolderContent } from "../hooks";
import { AppInnerProps } from "./app-inner";
import { ErrorState } from "./error-state";
import { LoadingState } from "./loading-state";
import { SandboxedViewer } from "@githubnext/utils";
import { LocalViewer } from "./local-viewer";

export function FolderViewer(
  props: Omit<AppInnerProps, "onReset" | "viewerType">
) {
  const { viewer, metadata = {}, dependencies, urlParts, doMimicProductionEnvironment } = props;

  if (
    urlParts.filepathtype === "blob" ||
    !urlParts.owner ||
    !urlParts.name
  ) {
    return (
      <div className="p-6 text-center bg-red-50 text-red-600 py-20 h-full italic">
        Unable to parse this GitHub URL. Are you sure you've linked to a folder and not a file?
      </div>
    );
  }

  const { owner, name, ref = "main", filepath = "/" } = urlParts;

  const { data, status } = useFolderContent({
    owner: owner,
    repo: name,
    path: filepath,
    fileRef: ref,
  });

  const getFileContent = useCallback(async (path: string) => {
    const importType = path.endsWith(".css") ? "inline" : "raw";
    const contents = await import(/* @vite-ignore */ `../../..${path}?${importType}`)
    return contents.default
  }, [])

  if (status === "loading") return <LoadingState />;
  if (status === "error") return <ErrorState />;
  if (status === "success" && data) {
    return doMimicProductionEnvironment ? (
      <div className="sandbox-wrapper h-full w-full">
        <SandboxedViewer
          getFileContent={getFileContent}
          tree={data.tree}
          context={{
            ...data.context,
            folder: name,
          }}
          dependencies={dependencies}
          viewer={viewer}
          metadata={metadata}
          session={{ token: "" }}
        />
      </div>
    ) : (
      <div className="sandbox-wrapper h-full w-full">
        <LocalViewer
          tree={data.tree}
          context={{
            ...data.context,
            file: name,
          }}
          viewer={viewer}
          metadata={metadata}
        />
      </div>
    )
  }

  return null;
}

