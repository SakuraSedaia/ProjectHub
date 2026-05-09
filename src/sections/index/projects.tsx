import { A } from "@solidjs/router";
import { For } from "solid-js";

const projectCards = [
  {
    title: "SACR Interface",
    description:
      "A Blender add-on providing a streamlined GUI for importing, configuring, and managing the Sakura Minecraft Character Rig.",
    cta: "View project",
    href: "/sacr-interface",
    imageClass: "product-sacr",
  },
  {
    title: "Blender Development",
    description:
      "A PyCharm plugin that makes developing and debugging Blender extensions easier with hot-reloading, sandboxing, and integrated linting.",
    cta: "View project",
    href: "/blender-development",
    imageClass: "product-blender-dev",
  },
  {
    title: "Sakura Minecraft Character Rig",
    description:
      "The flagship rig the SACR Interface is built around — a fully featured Minecraft character rig for animators and artists.",
    cta: "Learn more",
    href: "/sakura-character-rig",
    imageClass: "product-rig",
  },
];

export default function Projects() {
  return (
    <section class={"home-products"} aria-label={"Featured projects"}>
      <div class={"standard-container"}>
        <div class={"card-grid"} style={`grid-template-columns: repeat(${projectCards.length}, 1fr);`}>
          <For each={projectCards}>
            {(card) => (
              <article class={`product-card ${card.imageClass}`}>
                <div class={"card-image"} aria-hidden={"true"} />
                <div class={"card-body"}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <A href={card.href} class={"btn-primary small"}>{card.cta}</A>
                </div>
              </article>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
