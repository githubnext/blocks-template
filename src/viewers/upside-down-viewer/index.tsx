import { useShout } from "./hooks";
import "./style.css";

export function Viewer(props: FileViewerProps) {
  useShout();

  return (
    <div className="upside-down">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perferendis
      voluptates ea cum beatae saepe distinctio ut sit cumque sunt illo sint
      sequi deserunt itaque dolorem molestias consequatur, reprehenderit
      officia?
      {props.content}
    </div>
  );
}
