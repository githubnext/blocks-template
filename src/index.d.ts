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

interface ParsedGitHubUrl {
  protocol: string | null;
  slashes: string | null;
  auth: string | null;
  host: string | null;
  port: string | null;
  hostname: string | null;
  hash: string | null;
  search: string | null;
  query: string | null;
  pathname: string | null;
  path: string | null;
  href: string | null;
  filepath: string | null;
  branch: string | null;
  owner: string | null;
  name: string | null;
  repo: string | null;
  repository: string | null;
}
