import { useMemo, useState } from "react";
import parseUrl from "parse-github-url";

import { usePackageJson } from "./hooks";
import { AppInner } from "./components/app-inner";

function App() {
  const [selectedViewer, setSelectedViewer] = useState("");
  const [fileUrl, setFileUrl] = useState(
    // File example
    // "https://github.com/githubocto/flat/blob/main/src/git.ts"
    // Folder example
    "https://github.com/githubocto/flat/tree/main"
  );

  const { data: pkgJson, status } = usePackageJson();

  const urlParts = useMemo(() => {
    if (!fileUrl) return null;

    try {
      return parseUrl(fileUrl);
    } catch (e) {
      console.log(e);
      return null;
    }
  }, [fileUrl]);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="bg-gray-100 border-b p-4 flex-shrink-0 flex items-center">
        <div className="w-64">
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
              setSelectedViewer(e.target.value);
            }}
            value={selectedViewer}
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
        {(!selectedViewer || !fileUrl) && (
          <div className="p-4">
            <p className="text-sm">
              Please select a viewer and enter a file path.
            </p>
          </div>
        )}
        {selectedViewer && fileUrl && urlParts && (
          <AppInner
            viewer={selectedViewer}
            // @ts-ignore
            viewerType={
              pkgJson?.viewers.find((v) => v.entry === selectedViewer)?.type
            }
            dependencies={pkgJson?.dependencies as object}
            owner={urlParts.owner as string}
            repo={urlParts.name as string}
            path={urlParts.filepath as string}
            branch={urlParts.branch as string}
          />
        )}
      </div>
    </div>
  );
}

export default App;
