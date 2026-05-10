import { JSX } from "solid-js";

interface InstructionCardProps {
  title: string;
  description?: string;
  children: JSX.Element;
}

export default function InstructionCard(props: InstructionCardProps) {
  return (
    <div class={"instruction-card"}>
      <h3>{props.title}</h3>
      {props.description && <p>{props.description}</p>}
      {props.children}
    </div>
  );
}
