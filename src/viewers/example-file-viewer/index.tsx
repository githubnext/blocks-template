import {
  FileViewerProps,
  useTailwindCdn,
  extensionToLanguage,
} from "@githubnext/utils";

export function Viewer(props: FileViewerProps) {
  const { context, content } = props;

  useTailwindCdn();

  return (
    <div>
      <p className="text-sm">File: {context.path}</p>
      <pre className="p-4 text-gray-600">{content}</pre>
    </div>
  );
}
