import "./style.css";

export default function UpsideDownViewer(props: ViewerProps) {
  return <div className="transform rotate-180">{props.content}</div>;
}
