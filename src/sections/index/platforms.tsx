import { For } from "solid-js";

const platformCards = [
  {
    title: "Available on the Blender Extensions Platform",
    description:
      "Install SACR Interface directly from extensions.blender.org with one click and stay up to date automatically.",
    cta: "Open in Blender Extensions",
    href: "https://extensions.blender.org/add-ons/sakura-rig-gui/",
  },
  {
    title: "Source code on Codeberg",
    description:
      "All of my projects are open-source under the GNU/GPL V3 license — explore the code, file issues, or contribute.",
    cta: "Visit Codeberg",
    href: "https://codeberg.org/SakuraSedaia",
  },
  {
    title: "Built with SolidStart",
    description:
      "This hub itself is a SolidStart + SCSS application deployed on Vercel — fast, lightweight, and fully open.",
    cta: "About SolidStart",
    href: "https://www.solidjs.com/",
  },
  {
    title: "Follow development on YouTube",
    description:
      "Devlogs, tutorials, and previews of upcoming features for the rig and the development tooling around it.",
    cta: "Watch on YouTube",
    href: "https://youtube.com/c/SakuraSedaia",
  },
];

export default function Platforms() {
  return (
    <section class={"home-business"} aria-label={"Platforms & ecosystem"}>
      <h2>Platforms & ecosystem</h2>
      <div class={"card-grid"}>
        <For each={platformCards}>
          {(card) => (
            <article class={"business-card"}>
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
