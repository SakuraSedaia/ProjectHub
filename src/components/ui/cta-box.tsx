import { A } from "@solidjs/router";
import { Show } from "solid-js";

interface CTABoxProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  isExternal?: boolean;
}

export default function CTABox(props: CTABoxProps) {
  return (
    <div class={"issues-box"}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Show
        when={props.isExternal}
        fallback={
          <A href={props.href} class={"btn-primary"}>
            {props.buttonText}
          </A>
        }
      >
        <a href={props.href} class={"btn-primary"} target={"_blank"} rel={"noopener noreferrer"}>
          {props.buttonText}
        </a>
      </Show>
    </div>
  );
}
