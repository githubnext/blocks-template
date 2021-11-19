import { useCallback } from "react";
import { useFileContent } from "../hooks";
import { AppInnerProps } from "./app-inner";
import { ErrorState } from "./error-state";
import { LoadingState } from "./loading-state";
import { SandboxedBlock } from "@githubnext/utils";
import { LocalBlock } from "./local-block";

export function FileBlock(props: Omit<AppInnerProps, "onReset" | "blockType">) {
  const {
    block,
    metadata = {},
    dependencies,
    urlParts,
    doMimicProductionEnvironment,
  } = props;
  if (
    urlParts.filepathtype === "dir" ||
    !urlParts.owner ||
    !urlParts.name ||
    !urlParts.ref ||
    !urlParts.filepath
  ) {
    <div className="p-6 text-center bg-red-50 text-red-600 py-20 h-full italic">
      Unable to parse this GitHub URL. Are you sure you've linked to a folder
      and not a file?
    </div>;
  }

  const { owner, name, ref, filepath } = urlParts;

  const { data, status } = useFileContent({
    owner: owner,
    repo: name,
    path: filepath,
    fileRef: ref,
  });

  const getFileContent = useCallback(async (path: string) => {
    console.log(path);
    const importType = path.endsWith(".css") ? "inline" : "raw";
    const contents = await import(
      // /* @vite-ignore */ `../../..${path}?${importType}`
      /* @vite-ignore */ `../dist/file-block.js?raw`
    );
    console.log(contents);
    return contents.default;
  }, []);

  if (status === "loading") return <LoadingState />;
  if (status === "error") return <ErrorState />;
  if (status === "success" && data) {
    return doMimicProductionEnvironment ? (
      <div className="sandbox-wrapper h-full w-full">
        <SandboxedBlock
          getFileContent={getFileContent}
          contents={data.content}
          context={{
            ...data.context,
            file: name,
          }}
          dependencies={{}}
          block={block}
          metadata={metadata}
          session={{ token: "" }}
        />
        {/* <SandboxedBlock
          getFileContent={getFileContent}
          contents={data.content}
          context={{
            ...data.context,
            file: name,
          }}
          dependencies={dependencies}
          block={block}
          metadata={metadata}
          session={{ token: "" }}
        /> */}
      </div>
    ) : (
      <div className="sandbox-wrapper h-full w-full">
        <LocalBlock
          contents={data.content}
          context={{
            ...data.context,
            file: name,
          }}
          block={block}
          metadata={metadata}
        />
      </div>
    );
  }

  return null;
}
