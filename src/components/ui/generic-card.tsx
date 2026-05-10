import { A } from "@solidjs/router";
import { Show } from "solid-js";

interface GenericCardProps {
  title: string;
  description: string;
  href: string;
  cta: string;
  class?: string;
  imageClass?: string;
  isExternal?: boolean;
}

export default function GenericCard(props: GenericCardProps) {
  return (
    <article class={`${props.class || ""} ${props.imageClass || ""}`}>
      <Show when={props.imageClass}>
        <div class={"card-image"} aria-hidden={"true"} />
      </Show>
      <div class={props.imageClass ? "card-body" : ""}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Show
          when={props.isExternal}
          fallback={
            <A href={props.href} class={"btn-primary small"}>
              {props.cta}
            </A>
          }
        >
          <a
            href={props.href}
            class={"btn-primary small"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            {props.cta}
          </a>
        </Show>
      </div>
    </article>
  );
}
