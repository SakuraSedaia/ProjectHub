import { For } from "solid-js";
import IconBundle from "./icon-bundle";
import { sidebarOpen, toggleSidebar } from "~/utils/sidebar";

const socialLinks = [
  { name: "Github", href: "https://github.com/SakuraSedaia", icon: "github" },
  { name: "YouTube", href: "https://youtube.com/c/SakuraSedaia", icon: "youtube" },
  { name: "Discord", href: "https://discord.gg/Qk4pfbG7Pf", icon: "discord" },
  { name: "Codeberg", href: "https://codeberg.org/SakuraSedaia", icon: "codeberg" },
];

export default function RibbonHeader() {
  return (
    <header class={"ribbon-header"}>
      <div class={"ribbon-title"}>
        <span class={""}>Sakura's Project Hub</span>
      </div>
      <div class={"ribbon-sidenav-button"}>
        <button
          type={"button"}
          class={"hamburger-btn"}
          onClick={toggleSidebar}
          aria-label={"Toggle navigation sidebar"}
          aria-expanded={sidebarOpen()}
        >
          <IconBundle name={"hamburger"} />
        </button>
      </div>
      <div class={"ribbon-socials"}>
        <nav aria-label={"Social links"}>
          <ul>
            <For each={socialLinks}>
              {(link) => (
                <li>
                  <a
                    href={link.href}
                    class={"link"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    aria-label={link.name}
                  >
                    <IconBundle name={link.icon} class={"social-icon"} />
                    <span class={"social-name"}>{link.name}</span>
                  </a>
                </li>
              )}
            </For>
          </ul>
        </nav>
      </div>
    </header>
  );
}