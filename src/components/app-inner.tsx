import { FileViewer } from "./file-viewer";
import { FolderViewer } from "./folder-viewer";

export interface AppInnerProps {
  viewer: string;
  viewerType: "file" | "folder";
  repo: string;
  owner: string;
  path: string;
  branch: string;
  dependencies: object;
}

export function AppInner(props: AppInnerProps) {
  if (props.viewerType === "file") {
    return <FileViewer {...props} />;
  } else {
    return <FolderViewer {...props} />;
  }
}
