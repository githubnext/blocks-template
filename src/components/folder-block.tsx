import { useCallback } from "react";
import { useFolderContent } from "../hooks";
import { AppInnerProps } from "./app-inner";
import { ErrorState } from "./error-state";
import { LoadingState } from "./loading-state";
import { SandboxedBlock } from "@githubnext/utils";
import { LocalBlock } from "./local-block";

export function FolderBlock(
  props: Omit<AppInnerProps, "onReset" | "blockType">
) {
  const { block, metadata = {}, dependencies, urlParts, doMimicProductionEnvironment } = props;

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
        <SandboxedBlock
          getFileContent={getFileContent}
          tree={data.tree}
          context={{
            ...data.context,
            folder: name,
          }}
          dependencies={dependencies}
          block={block}
          metadata={metadata}
          session={{ token: "" }}
        />
      </div>
    ) : (
      <div className="sandbox-wrapper h-full w-full">
        <LocalBlock
          tree={data.tree}
          context={{
            ...data.context,
            file: name,
          }}
          block={block}
          metadata={metadata}
        />
      </div>
    )
  }

  return null;
}

