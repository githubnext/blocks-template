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
  metadata: any;
  onUpdateMetadata: (metadata: any) => Promise<void>;
}

function Viewer(props: ViewerProps) {
  const { content, meta } = props;
  const { owner, repo } = meta;

  return <div>{content}</div>;
}

export default Viewer;
