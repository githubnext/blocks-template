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

interface ViewerProps {
  content: string;
  meta: ViewerMeta;
}
