import GitUrlParse from "git-url-parse";
import { useEffect, useMemo, useState } from "react";
import { AppInner } from "./components/app-inner";
import { useDebounce, useLocalStorage, usePackageJson } from "./hooks";

function App() {
  const [blockId, setBlockId] = useLocalStorage(
    "blockId",
    "/src/blocks/example-file-block/index.tsx"
  );
  const [fileUrl, setFileUrl] = useLocalStorage(
    "fileUrl",
    "https://github.com/githubocto/flat/blob/main/src/git.ts"
  );

  const debouncedFileUrl = useDebounce(fileUrl, 500);

  const [doMimicProductionEnvironment, setDoMimicProductionEnvironment] =
    useLocalStorage("doMimicProductionEnvironment", false);

  const { data: pkgJson, status } = usePackageJson();

  const metadataKey = `composable-github-block-template--${blockId}-${debouncedFileUrl}`;
  const [metadata, setMetadata] = useLocalStorage(metadataKey, {});

  useEffect(() => {
    const onUpdateMetadata = (event: MessageEvent) => {
      const originRegex = new RegExp(
        /^https:\/\/\d{1,4}-\d{1,4}-\d{1,4}-sandpack\.codesandbox\.io$/
      );
      if (!originRegex.test(origin) && origin !== window.location.origin)
        return;
      if (event.data.codesandbox) return;
      if (event.data.type !== "update-metadata") return;
      const newMetadata = event?.data?.metadata || {};

      setMetadata(newMetadata);
    };
    window.addEventListener("message", onUpdateMetadata as EventListener);
    return () => {
      window.removeEventListener("message", onUpdateMetadata as EventListener);
    };
  }, [metadataKey]);

  const urlParts = useMemo(() => {
    if (!debouncedFileUrl) return null;

    try {
      return GitUrlParse(debouncedFileUrl);
    } catch (e) {
      return null;
    }
  }, [debouncedFileUrl]);

  const [block, setBlock] = useState(
    pkgJson?.blocks.find((v) => v.entry === blockId)
  );

  useEffect(() => {
    const entry = pkgJson?.blocks.find((v) => v.entry === blockId);

    if (entry) {
      setBlock(entry);
    } else {
      const defaultBlockId = pkgJson?.blocks[0].entry;
      if (!defaultBlockId) return;
      setBlockId(defaultBlockId);
    }
  }, [blockId, pkgJson]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          boxShadow: "0 0 1em rgba(0, 0, 0, 0.1)",
          flex: "none",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "0.5em",
          zIndex: 10,
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "min(90vw, 13em)",
            margin: "0.6em 0.5em",
          }}
        >
          <label
            style={{
              fontSize: "0.9em",
              fontWeight: 500,
              display: "block",
              marginBottom: "0.5em",
            }}
            htmlFor="url"
          >
            GitHub File URL
          </label>
          <input
            id="url"
            style={{
              width: "calc(100% - 1.2em)",
              fontSize: "1em",
              padding: "0.5em",
              border: "1px solid #ccc",
            }}
            placeholder="Enter GitHub file URL"
            value={fileUrl}
            onChange={(e) => {
              setFileUrl(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            minWidth: "min(90vw, 13em)",
            margin: "0.6em 0.5em",
          }}
        >
          <label
            style={{
              fontSize: "0.9em",
              fontWeight: 500,
              display: "block",
              marginBottom: "0.5em",
            }}
            htmlFor="block"
          >
            Block
          </label>
          <select
            onChange={(e) => {
              setBlockId(e.target.value);
            }}
            value={blockId}
            disabled={!pkgJson || status !== "success"}
            style={{
              width: "100%",
              fontSize: "1em",
              padding: "0.5em",
              border: "1px solid #ccc",
            }}
            name="block"
            id="block"
          >
            <option disabled value="">
              Select a block
            </option>
            <optgroup label="Folder Blocks">
              {pkgJson &&
                pkgJson.blocks
                  .filter((v) => v.type === "folder")
                  .map((block, index) => {
                    return (
                      <option value={block.entry} key={index}>
                        {block.title}
                      </option>
                    );
                  })}
            </optgroup>
            <optgroup label="File Blocks">
              {pkgJson &&
                pkgJson.blocks
                  .filter((v) => v.type === "file")
                  .map((block, index) => {
                    return (
                      <option value={block.entry} key={index}>
                        {block.title}
                      </option>
                    );
                  })}
            </optgroup>
          </select>
        </div>
        <div
          style={{
            flex: 1,
            minWidth: "min(90vw, 13em)",
            margin: "0.6em 0.5em",
          }}
        >
          <label
            style={{
              fontSize: "0.9em",
              fontWeight: 500,
              display: "block",
              marginBottom: "0.5em",
            }}
            htmlFor="block"
          >
            Environment
          </label>
          <select
            onChange={(e) => {
              setDoMimicProductionEnvironment(e.target.value === "true");
            }}
            value={doMimicProductionEnvironment ? "true" : "false"}
            style={{
              width: "100%",
              fontSize: "1em",
              padding: "0.5em",
              border: "1px solid #ccc",
            }}
            name="block"
            id="block"
          >
            <option value="false">
              Local dev environment (iterate more quickly)
            </option>
            <option value="true">
              Production environment (test for bugs in production environment)
            </option>
          </select>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          overflow: "auto",
        }}
      >
        {(!blockId || !debouncedFileUrl) && (
          <div
            style={{
              padding: "1em",
            }}
          >
            <p>Please select a block and enter a file path.</p>
          </div>
        )}
        {!!block && !!debouncedFileUrl && !!urlParts && (
          <AppInner
            key={block.entry}
            metadata={metadata}
            onReset={() => setFileUrl("")}
            block={block}
            dependencies={pkgJson?.dependencies as Record<string, string>}
            urlParts={urlParts}
            doMimicProductionEnvironment={doMimicProductionEnvironment}
          />
        )}
      </div>
    </div>
  );
}

export default App;
