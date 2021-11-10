interface ViewerMeta {
  language: string;
  download_url: string;
  name: string;
  path: string;
  repo: string;
  owner: string;
  sha: string;
  username: string;
}

interface FileViewerProps {
  content: string;
  meta: ViewerMeta;
}

interface FolderViewerProps {
  tree: {
    path: string;
    mode: string;
    type: string;
    sha: string;
    size: number;
    url: string;
  }[];
  content: string;
  meta: {
    theme: string;
    download_url: string;
    name: string;
    path: string;
    repo: string;
    owner: string;
    sha: string;
    username: string;
  };
}
