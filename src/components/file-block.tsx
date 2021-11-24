import { useFileContent } from "../hooks";
import { AppInnerProps } from "./app-inner";
import { ErrorState } from "./error-state";
import { LoadingState } from "./loading-state";
import { ProductionBlock } from "./production-block"
import { LocalBlock } from "./local-block";

export function FileBlock(props: Omit<AppInnerProps, "onReset" | "blockType">) {
  const {
    block,
    metadata = {},
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
    <div style={{
      padding: '10vh 1rem',
      textAlign: 'center',
      backgroundColor: '#FEF2F2',
      color: '#DB2725',
      height: '100%',
      fontStyle: 'italic',
    }}>
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

  if (status === "loading") return <LoadingState />;
  if (status === "error") return <ErrorState />;
  if (status === "success" && data) {
    return doMimicProductionEnvironment ? (
      <div className="sandbox-wrapper" style={{
        height: "100%",
        width: "100%"
      }}>
        <ProductionBlock
          contents={data.content}
          context={{
            ...data.context,
            file: name,
          }}
          block={block}
          metadata={metadata}
        />
      </div>
    ) : (
      <div className="sandbox-wrapper" style={{
        height: "100%",
        width: "100%"
      }}>
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
