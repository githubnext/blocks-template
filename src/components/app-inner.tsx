import { useFileContent, useFolderContent } from "../hooks";
import { SandboxedViewer } from "./sandboxed-viewer";

interface AppInnerProps {
  viewer: string;
  viewerType: "file" | "folder";
  repo: string;
  owner: string;
  path: string;
  branch: string;
  dependencies: object;
}

const LoadingState = () => (
  <div className="p-4">
    <p className="text-sm">Loading...</p>
  </div>
);

const ErrorState = () => (
  <div className="p-4">
    <p className="text-sm">An error occurred.</p>
  </div>
);

function FileViewer(props: AppInnerProps) {
  const { viewer, repo, owner, path, branch, dependencies } = props;
  const { data, status } = useFileContent({
    owner: owner,
    repo: repo,
    path: path,
    fileRef: branch,
  });

  if (status === "loading") return <LoadingState />;
  if (status === "error") return <ErrorState />;
  if (status === "success" && data) {
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

    return (
      <SandboxedViewer
        meta={meta}
        dependencies={dependencies}
        originalContent={data[0].content || ""}
        viewer={viewer}
      />
    );
  }

  return null;
}

function FolderViewer(props: AppInnerProps) {
  const { viewer, repo, owner, path, branch, dependencies } = props;
  const { data, status } = useFolderContent({
    owner: owner,
    repo: repo,
    path: path,
    fileRef: branch,
  });

  if (status === "loading") return <LoadingState />;
  if (status === "error") return <ErrorState />;
  if (status === "success" && data) {
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

    return (
      <SandboxedViewer
        meta={meta}
        dependencies={dependencies}
        viewer={viewer}
      />
    );
  }

  return null;
}

export function AppInner(props: AppInnerProps) {
  if (props.viewerType === "file") {
    return <FileViewer {...props} />;
  } else {
    return <FolderViewer {...props} />;
  }
}
