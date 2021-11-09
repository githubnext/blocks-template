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
  files: File[];
  contents: string;
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
