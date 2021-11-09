import Marquee from "react-fast-marquee";
import "./style.css";

// Automagically pulls types from index.d.ts
export function Viewer(props: ViewerProps) {
  return (
    <Marquee>
      I can be a React component, multiple React components, or just some text.
    </Marquee>
  );
}
