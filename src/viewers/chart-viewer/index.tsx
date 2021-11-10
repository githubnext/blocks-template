export function Viewer(props: FileViewerProps) {
  return (
    <div>
      <div>Chart goes here</div>
      {props.content}
    </div>
  );
}
