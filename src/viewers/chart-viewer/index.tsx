export function Viewer(props: ViewerProps) {
  return (
    <div>
      <div>Chart goes here</div>
      {props.content}
    </div>
  );
}
