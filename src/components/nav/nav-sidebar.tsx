import { onMount, onCleanup } from "solid-js";
import { isServer } from "solid-js/web";
import { sidebarOpen, closeSidebar } from "~/utils/sidebar";
import { NavRouter, NavItem, NavSubRouter } from "./nav";

export default function NavSidebar() {
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
      <div class={"nav-contain"}>
        <NavRouter class={"nav-internal"}>
          <NavItem path={"/"}>Home</NavItem>
          <NavSubRouter title={"Projects"}>
            <NavItem path={"/sacr-interface"}>SACR Interface</NavItem>
            <NavItem path={"/blender-development"}>Blender Development</NavItem>
          </NavSubRouter>
        </NavRouter>
        
        <NavRouter class={"nav-external"}>
          <NavItem path={"https://sakura-sedaia.com"}>Main Site</NavItem>
          <NavItem path={"https://sakura-sedaia.com/contact"}>Contact</NavItem>
          <NavItem path={"https://wiki.sakura-sedaia.com"}>Wiki</NavItem>
        </NavRouter>
      </div>
    </nav>
  );
}