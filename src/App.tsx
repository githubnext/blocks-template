import { useMemo, useState } from "react";
import parseUrl from "parse-github-url";
import Viewer from "./Viewer";
import { useFileContent } from "./hooks";

function App() {
  const [fileUrl, setFileUrl] = useState(
    "https://github.com/githubocto/flat/blob/main/src/git.ts"
  );

  const urlParts = useMemo(() => parseUrl(fileUrl), [fileUrl]);
  if (!urlParts) return null;
  const { owner, name: repo, branch, filepath: path } = urlParts;

  const meta = {
    owner: owner as string,
    repo: repo as string,
    path: path as string,
    language: "",
    sha: branch,
    username: "",
    download_url: fileUrl,
    name: "",
  };

  const { data, status } = useFileContent({
    owner: owner as string,
    repo: repo as string,
    path: path as string,
    fileRef: branch,
  });

  const content = data?.[0]?.content || "";

  return (
    <div>
      <div
        style={{
          position: "sticky",
          width: "100%",
          top: 0,
          padding: "1em 2em",
        }}
      >
        Example file url on GitHub:
        <input
          style={{
            padding: "0.4em 1em",
            marginLeft: "1em",
            width: "50em",
          }}
          value={fileUrl}
          onChange={(e) => {
            setFileUrl(e.target.value);
          }}
        />
      </div>
      <Viewer
        content={content}
        meta={meta}
        metadata={{}}
        onUpdateMetadata={() => {
          return new Promise((res) => res());
        }}
      />
    </div>
  );
}

export default App;
