import { useEffect, useMemo, useState } from "react";
import GitUrlParse from "git-url-parse";
import "@githubnext/utils/dist/index.css"

import { useLocalStorage, usePackageJson } from "./hooks";
import { AppInner } from "./components/app-inner";
import { FileContext, FolderContext } from "@githubnext/utils";


interface MetadataEvent {
  context: FileContext | FolderContext
  metadata: any
}
function App() {
  const [viewerId, setViewerId] = useState("/src/viewers/example-file-viewer/index.tsx");
  const [fileUrl, setFileUrl] = useState(
    "https://github.com/githubocto/flat/blob/main/src/git.ts"
  );

  const { data: pkgJson, status } = usePackageJson();

  const metadataKey = `composable-github-viewer-template--${viewerId}-${fileUrl}`
  const [metadata, setMetadata] = useLocalStorage(metadataKey, {})

  useEffect(() => {
    const onUpdateMetadata = (event: MessageEvent) => {
      // TODO: restrict by event.origin
      if (event.data.codesandbox) return
      if (event.data.type !== "update-metadata") return
      const newMetadata = event?.data?.metadata || {};

      setMetadata(newMetadata)
    }
    window.addEventListener("message", onUpdateMetadata as EventListener)
    return () => {
      window.removeEventListener("message", onUpdateMetadata as EventListener)
    }
  }, [metadataKey])

  const onUpdateMetadata = (newMetadata: any) => {
    return new Promise<void>((resolve, reject) => {
      setMetadata(newMetadata)
      resolve()
    })
  }

  const urlParts = useMemo(() => {
    if (!fileUrl) return null;

    try {
      return GitUrlParse(fileUrl);
    } catch (e) {
      return null;
    }
  }, [fileUrl]);

  const viewer = pkgJson?.viewers.find((v) => v.entry === viewerId);

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
          <label className="text-xs font-medium block mb-1" htmlFor="viewer">
            Viewer
          </label>
          <select
            onChange={(e) => {
              setViewerId(e.target.value);
            }}
            value={viewerId}
            disabled={!pkgJson || status !== "success"}
            className="form-select text-sm"
            name="viewer"
            id="viewer"
          >
            <option disabled value="">
              Select a viewer
            </option>
            <optgroup label="Folder Viewers">
              {pkgJson &&
                pkgJson.viewers
                  .filter((v) => v.type === "folder")
                  .map((viewer, index) => {
                    return (
                      <option value={viewer.entry} key={index}>
                        {viewer.title}
                      </option>
                    );
                  })}
            </optgroup>
            <optgroup label="File Viewers">
              {pkgJson &&
                pkgJson.viewers
                  .filter((v) => v.type === "file")
                  .map((viewer, index) => {
                    return (
                      <option value={viewer.entry} key={index}>
                        {viewer.title}
                      </option>
                    );
                  })}
            </optgroup>
          </select>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {(!viewerId || !fileUrl) && (
          <div className="p-4">
            <p className="text-sm">
              Please select a viewer and enter a file path.
            </p>
          </div>
        )}
        {!!viewer && !!fileUrl && !!urlParts && (
          <AppInner
            key={viewer.entry}
            metadata={metadata}
            onUpdateMetadata={onUpdateMetadata}
            onReset={() => setFileUrl("")}
            viewer={viewer}
            dependencies={pkgJson?.dependencies as Record<string, string>}
            urlParts={urlParts}
          />
        )}
      </div>
    </div>
  );
}

export default App;
