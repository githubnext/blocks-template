import "./style.css";

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

  return (
    <div className="p-4">
      <p className="text-gray-600 text-sm">
        Showing the content of {owner}/{repo}
      </p>
      <div className="mt-2">
        <pre className="bg-gray-100 overflow-auto">
          <code>{content}</code>
        </pre>
      </div>
    </div>
  );
}

export default Viewer;
