import {
  FileViewerProps,
  useTailwindCdn,
  getLanguageFromFilename,
} from "@githubnext/utils";

export function Viewer(props: FileViewerProps) {
  const { context, content } = props;
  const language = getLanguageFromFilename(context.file);

  useTailwindCdn();

  return (
    <div>
      <p className="text-sm">
        File: {context.path} {language}
      </p>
      <pre className="p-4 text-gray-600">{content}</pre>
    </div>
  );
}
