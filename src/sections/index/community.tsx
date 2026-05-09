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
    title: "Join the Fluxer community",
    description:
      "Want an alternative to Discord? I have a Fluxer community as well! Feel free to join and chat with other users of Fluxer.",
    cta: "Join the Fluxer community",
    href: "https://fluxer.gg/M9gYmCdr",
  },
];

export default function Community() {
  return (
    <section class={"home-community"} aria-label={"Community"}>
      <div class={"standard-container"}>
        <div class={"card-grid two"}>
          <For each={communityCards}>
            {(card) => (
              <article class={"community-card"}>
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
      </div>
    </section>
  );
}
