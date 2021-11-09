import { useMemo, useState } from "react";
import parseUrl from "parse-github-url";

const modules = import.meta.globEager("./viewers/**/*");

import Viewer from "./Viewer";
import { useFileContent } from "./hooks";

interface AppInnerProps {
  viewer: string;
  repo: string;
  owner: string;
  path: string;
  branch: string;
}

function AppInner(props: AppInnerProps) {
  const { viewer, repo, owner, path, branch } = props;
  const { data, status } = useFileContent({
    owner: owner,
    repo: repo,
    path: path,
    fileRef: branch,
  });

  if (status === "loading")
    return (
      <div className="p-4">
        <p className="text-sm">Loading...</p>
      </div>
    );

  if (status === "error")
    return (
      <div className="p-4">
        <p className="text-sm">Error: {data}</p>
      </div>
    );

  if (status === "success" && data) {
    const ViewerComponent = modules[viewer].default as React.FC<ViewerProps>;

    const meta = {
      owner: owner,
      repo: repo,
      path: path,
      language: "",
      sha: branch,
      username: "",
      download_url: "",
      name: "",
    };

    return <ViewerComponent content={data[0].content || ""} meta={meta} />;
  }

  return null;
}

function App() {
  const [selectedViewer, setSelectedViewer] = useState("");
  const [fileUrl, setFileUrl] = useState(
    "https://github.com/githubocto/flat/blob/main/src/git.ts"
  );

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
            className="form-select text-sm"
            name="viewer"
            id="viewer"
          >
            <option disabled value="">
              Select a viewer
            </option>
            {Object.keys(modules).map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}
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
