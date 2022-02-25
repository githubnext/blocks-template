import { FileBlockProps, getLanguageFromFilename } from "@githubnext/utils";
import "./index.css";

export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  const language = Boolean(context.path)
    ? getLanguageFromFilename(context.path)
    : "N/A";

  return (
    <div className="Box m-4">
      <div className="Box-header">
        <h3 className="Box-title">
          File: {context.path} {language}
        </h3>
      </div>
      <div className="Box-body">
        Metadata example: this button has been clicked{" "}
        <button
          className="btn"
          onClick={() =>
            onUpdateMetadata({ number: (metadata.number || 0) + 1 })
          }
        >
          {metadata.number || 0} times
        </button>
        <pre className="mt-3 p-3">{content}</pre>
      </div>
    </div>
  );
}
