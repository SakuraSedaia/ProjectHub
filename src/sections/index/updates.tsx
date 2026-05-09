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
    title: "Sakura Rig Utilities V4.0.0 Alpha",
    description:
      "The next major version of the rig interface, targeting Blender 5.0 with a refreshed UI, new features, and bug fixes.",
    cta: "View development branch",
    href: "/sakura-rig-utilities",
  },
  {
    title: "Sakura Rig Utilities V3.1.0",
    description:
      "Stable release that streamlines UI navigation, adds missing eye material options, and optimizes the backend for better maintainability.",
    cta: "Read the changelog",
    href: "/sakura-rig-utilities",
  },
];

export default function Updates() {
  return (
    <section class={"home-updates"} aria-label={"Latest updates"}>
      <div class={"standard-container"}>
        <h2>Latest updates</h2>
        <div class={"card-grid three"}>
          <For each={updateCards}>
            {(card) => (
              <article class={"updates-card"}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <A href={card.href} class={"btn-primary small"}>{card.cta}</A>
              </article>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
