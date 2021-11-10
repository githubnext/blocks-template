export function Viewer(props: FolderViewerProps) {
  return (
    <div>
      <p>This is the folder content.</p>
      <ul>
        {props.tree.map((item, index) => (
          <li key={index}>{item.path}</li>
        ))}
      </ul>
    </div>
  );
}
