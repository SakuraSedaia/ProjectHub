import { A } from "@solidjs/router";
import { For } from "solid-js";

const updateCards = [
  {
    title: "Blender Development 0.6.0 Alpha",
    description:
      "A major foundational update — moves to uv for environments, improves project setup, and adds extensive threading and process fixes across Windows, macOS, and Linux.",
    cta: "Read the changelog",
    href: "/blender-development",
  },
  {
    title: "SACR Interface V4.0.0 Alpha",
    description:
      "The next major version of the rig interface, targeting Blender 5.0 with a refreshed UI, new features, and bug fixes.",
    cta: "View development branch",
    href: "/sacr-interface",
  },
  {
    title: "SACR Interface V3.1.0",
    description:
      "Stable release that streamlines UI navigation, adds missing eye material options, and optimizes the backend for better maintainability.",
    cta: "Read the changelog",
    href: "/sacr-interface",
  },
];

export default function Updates() {
  return (
    <section class={"home-ai"} aria-label={"Latest updates"}>
      <h2>Latest updates</h2>
      <div class={"card-grid three"}>
        <For each={updateCards}>
          {(card) => (
            <article class={"ai-card"}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <A href={card.href} class={"btn-primary small"}>{card.cta}</A>
            </article>
          )}
        </For>
      </div>
    </section>
  );
}
