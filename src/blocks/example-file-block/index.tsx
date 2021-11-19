import {
  FileBlockProps,
  useTailwindCdn,
  getLanguageFromFilename,
} from "@githubnext/utils";
import "./index.css";

export function Block(props: FileBlockProps) {
  const { context, content } = props;
  const language = getLanguageFromFilename(context.file);

  useTailwindCdn();

  return (
    <div className="p-4 code">
      <p className="text-sm">
        File: {context.path} {language}
      </p>
      <pre className="p-4 text-gray-600">{content}</pre>
    </div>
  );
}
