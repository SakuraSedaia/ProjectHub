import IconBundle from "~/components/icon-bundle";
import { sidebarOpen, toggleSidebar } from "~/utils/sidebar";

const socialLinks = [
  { name: "Github", href: "https://github.com/SakuraSedaia", icon: "github" },
  { name: "YouTube", href: "https://youtube.com/c/SakuraSedaia", icon: "youtube" },
  { name: "Discord", href: "https://discord.gg/Qk4pfbG7Pf", icon: "discord" },
  { name: "Codeberg", href: "https://codeberg.org/SakuraSedaia", icon: "codeberg" },
];

export default function RibbonHeaderMobile() {
  return (
    <header class={"ribbon-header-mobile"}>
      <div class={"ribbon-start"}>
        <span class={"ribbon-title"}>Sakura's Project Hub</span>
      </div>
      <div class={"ribbon-end"}>
        <button
          type={"button"}
          class={"hamburger-btn"}
          onClick={toggleSidebar}
          aria-label={"Toggle navigation sidebar"}
          aria-expanded={sidebarOpen()}
        >
          <IconBundle name={"hamburger"} />
        </button>
        <nav class={"ribbon-socials"} aria-label={"Social links"}>
        <ul>
          {socialLinks.map((link) => (
            <li>
              <a
                href={link.href}
                class={"link"}
                target={"_blank"}
                rel={"noopener noreferrer"}
                aria-label={link.name}
              >
                <IconBundle name={link.icon} class={"social-icon"} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
  );
}