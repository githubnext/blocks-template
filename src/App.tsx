import "@githubnext/utils/dist/index.css";
import GitUrlParse from "git-url-parse";
import { useEffect, useMemo, useState } from "react";
import { AppInner } from "./components/app-inner";
import { useLocalStorage, usePackageJson } from "./hooks";

function App() {
  const [blockId, setBlockId] = useState(
    "/src/blocks/example-file-block/index.tsx"
  );
  const [fileUrl, setFileUrl] = useState(
    "https://github.com/githubocto/flat/blob/main/src/git.ts"
  );
  const [doMimicProductionEnvironment, setDoMimicProductionEnvironment] =
    useState(false);

  const { data: pkgJson, status } = usePackageJson();

  const metadataKey = `composable-github-block-template--${blockId}-${fileUrl}`;
  const [metadata, setMetadata] = useLocalStorage(metadataKey, {});

  useEffect(() => {
    const onUpdateMetadata = (event: MessageEvent) => {
      // TODO: restrict by event.origin
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

  const onUpdateMetadata = (newMetadata: any) => {
    return new Promise<void>((resolve) => {
      setMetadata(newMetadata);
      resolve();
    });
  };

  const urlParts = useMemo(() => {
    if (!fileUrl) return null;

    try {
      return GitUrlParse(fileUrl);
    } catch (e) {
      return null;
    }
  }, [fileUrl]);

  const block = pkgJson?.blocks.find((v) => v.entry === blockId);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="bg-gray-100 border-b p-4 flex-shrink-0 flex items-center">
        <div className="w-[400px]">
          <label className="text-xs font-medium block mb-1" htmlFor="url">
            GitHub File URL
          </label>
          <input
            id="url"
            className="form-input w-full text-sm"
            placeholder="Enter GitHub file URL"
            value={fileUrl}
            onChange={(e) => {
              setFileUrl(e.target.value);
            }}
          />
        </div>
        <div className="ml-4">
          <label className="text-xs font-medium block mb-1" htmlFor="block">
            Block
          </label>
          <select
            onChange={(e) => {
              setBlockId(e.target.value);
            }}
            value={blockId}
            disabled={!pkgJson || status !== "success"}
            className="form-select text-sm"
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
        <div className="ml-4">
          <label className="text-xs font-medium block mb-1" htmlFor="block">
            Environment
          </label>
          <select
            onChange={(e) => {
              setDoMimicProductionEnvironment(e.target.value === "true");
            }}
            value={doMimicProductionEnvironment ? "true" : "false"}
            className="form-select text-sm"
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
      <div className="flex-1 overflow-auto">
        {(!blockId || !fileUrl) && (
          <div className="p-4">
            <p className="text-sm">
              Please select a block and enter a file path.
            </p>
          </div>
        )}
        {!!block && !!fileUrl && !!urlParts && (
          <AppInner
            key={block.entry}
            metadata={metadata}
            onUpdateMetadata={onUpdateMetadata}
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
