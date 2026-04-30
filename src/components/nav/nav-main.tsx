import { Show, onMount, onCleanup } from "solid-js";
import { isServer } from "solid-js/web";
import { A } from "@solidjs/router";
import { isVercelActivated } from "~/utils/vercel";
import IconBundle from "~/components/icon-bundle";
import { sidebarOpen, closeSidebar } from "~/utils/sidebar";

export default function NavMain() {
  let navRef: HTMLElement | undefined;

  const handleClickOutside = (e: MouseEvent) => {
    if (sidebarOpen() && navRef && !navRef.contains(e.target as Node)) {
      // Check if the click was on the hamburger button to avoid double toggle
      const target = e.target as HTMLElement;
      if (target.closest(".hamburger-btn")) {
        return;
      }
      closeSidebar();
    }
  };

  onMount(() => {
    if (isServer) return;
    document.addEventListener("click", handleClickOutside);
  });

  onCleanup(() => {
    if (isServer) return;
    document.removeEventListener("click", handleClickOutside);
  });

  return (
    <nav class={`nav-main ${!sidebarOpen() ? "sidebar-closed" : ""}`} ref={navRef}>
      <ul>
        <li><A href="/" end={true} onClick={closeSidebar}>Home</A></li>
        <li>
          <span>Projects <IconBundle name={"arrow-down"} /></span>
          <ul>
            <li><A href="/sacr-interface" end={true} onClick={closeSidebar}>SACR Interface</A></li>
            <li><A href="/blender-development" end={true} onClick={closeSidebar}>Blender Development</A></li>
          </ul>
        
        </li>
        <Show when={isVercelActivated()}>
          <li><A href="/component-map" end={true} onClick={closeSidebar}>Component Map</A></li>
        </Show>
      </ul>
      <ul class={"nav-external"} aria-label={"External sites"}>
        <li class={"nav-external"}>
          <a href={"https://sakura-sedaia.com"} target={"_blank"} rel={"noopener noreferrer"}>
            <span>Main Website</span>
          </a>
        </li>
        <li class={"nav-external"}>
          <a href={"https://sakura-sedaia.com/contact"} target={"_blank"} rel={"noopener noreferrer"}>
            <span>Contact</span>
          </a>
        </li>
        <li class={"nav-external"}>
          <a href={"https://wiki.sakura-sedaia.com"} target={"_blank"} rel={"noopener noreferrer"}>
            <span>Wiki</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}