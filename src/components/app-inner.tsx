import { FileViewer } from "./file-viewer";
import { FolderViewer } from "./folder-viewer";

export interface AppInnerProps {
  viewer: string;
  viewerType: "file" | "folder";
  dependencies: object;
  urlParts: ParsedGitHubUrl;
}

export function AppInner(props: AppInnerProps) {
  if (props.viewerType === "file") {
    return <FileViewer {...props} />;
  } else {
    return <FolderViewer {...props} />;
  }
}
