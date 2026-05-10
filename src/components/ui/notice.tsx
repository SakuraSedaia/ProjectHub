import { JSX } from "solid-js";

interface NoticeProps {
  title?: string;
  type?: string;
  children: JSX.Element;
}

export default function Notice(props: NoticeProps) {
  return (
    <div class={`notice ${props.type || ""}`}>
      {props.title && <h3>{props.title}</h3>}
      {props.children}
    </div>
  );
}
