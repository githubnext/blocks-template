export function Viewer(props: FileViewerProps) {
  return (
    <div>
      <p>This is the file content</p>
      <pre>{props.content}</pre>
    </div>
  );
}
