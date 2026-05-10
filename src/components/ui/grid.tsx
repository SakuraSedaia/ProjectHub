import { JSX, splitProps, Dynamic } from "solid-js/web";

interface GridProps extends JSX.HTMLAttributes<HTMLDivElement> {
  cols?: number;
  tag?: string;
}

export default function Grid(props: GridProps) {
  const [local, others] = splitProps(props, ["cols", "tag", "class", "style", "children"]);
  
  return (
    <Dynamic
      component={local.tag || "div"}
      class={`${local.class || "grid-container"}`}
      style={{
        "--cols": local.cols,
        ...(typeof local.style === "object" ? local.style : {}),
      }}
      {...others}
    >
      {local.children}
    </Dynamic>
  );
}
