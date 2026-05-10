import { Dynamic } from "solid-js/web";

interface SectionHeadingProps {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  id?: string;
}

export default function SectionHeading(props: SectionHeadingProps) {
  return (
    <div class={"heading"}>
      <Dynamic component={`h${props.level || 1}`} id={props.id}>
        {props.title}
      </Dynamic>
    </div>
  );
}
