import { For } from "solid-js";

const communityCards = [
  {
    title: "Join the Discord community",
    description:
      "Get help, share your work, and chat with other users of the Sakura Rig and Blender Development plugin.",
    cta: "Join the Discord",
    href: "https://discord.gg/Qk4pfbG7Pf",
  },
  {
    title: "Report issues & request features",
    description:
      "Found a bug or have an idea? File issues directly on the project repositories on Codeberg.",
    cta: "Open an issue",
    href: "https://codeberg.org/SakuraSedaia",
  },
];

export default function Community() {
  return (
    <section class={"home-sustainability"} aria-label={"Community"}>
      <div class={"card-grid two"}>
        <For each={communityCards}>
          {(card) => (
            <article class={"story-card"}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a
                href={card.href}
                class={"btn-primary small"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {card.cta}
              </a>
            </article>
          )}
        </For>
      </div>
    </section>
  );
}
