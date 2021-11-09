interface ViewerProps {
  content: string;
  meta: {
    language: string;
    download_url: string;
    name: string;
    path: string;
    repo: string;
    owner: string;
    sha: string;
    username: string;
  };
  // onUpdateMetadata: (metadata: any) => Promise<void>;
}
