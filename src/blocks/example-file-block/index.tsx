import {
  FileBlockProps,
  // useTailwindCdn,
  getLanguageFromFilename,
} from "@githubnext/utils";
import "./index.css";

export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  const language = getLanguageFromFilename(context.file);

  // useTailwindCdn();

  return (
    <div className="p-4 code">
      <p className="text-sm">
        File: {context.path} {language}
      </p>
      <div className="py-6">
        Metadata example: this button has been clicked <button onClick={() => onUpdateMetadata({ number: (metadata.number || 0) + 1 })}>{metadata.number || 0} times</button>
      </div>
      <pre className="p-4 text-gray-600">{content}</pre>
    </div>
  );
}
