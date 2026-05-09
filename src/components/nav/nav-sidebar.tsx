import { onMount, onCleanup, createSignal } from "solid-js";
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
  
  const [year] = createSignal(new Date().getFullYear());
  
  onMount(() => {
    document.addEventListener("click", handleClickOutside);
    onCleanup(() => {
      document.removeEventListener("click", handleClickOutside);
    });
  });
  
  return (
    <nav class={`nav-main ${!sidebarOpen() ? "sidebar-closed" : ""}`} ref={navRef}>
      <div class={"nav-contain"}>
        <NavRouter class={"nav-internal"}>
          <NavItem path={"/"}>Home</NavItem>
          <NavSubRouter title={"Plugins"}>
            <NavItem path={"/sacr-interface"}>SACR Interface</NavItem>
            <NavItem path={"/blender-development"}>Blender Development</NavItem>
          </NavSubRouter>
          <NavSubRouter title={"Assets"}>
            <NavItem path={"/sakura-character-rig"}>Sakura Character Rig</NavItem>
          </NavSubRouter>
        </NavRouter>
        
        <NavRouter class={"nav-external"}>
          <NavItem path={"https://sakura-sedaia.com"}>Main Site</NavItem>
          <NavItem path={"https://sakura-sedaia.com/contact"}>Contact</NavItem>
          <NavItem path={"https://wiki.sakura-sedaia.com"}>Wiki</NavItem>
        </NavRouter>
        
        <div class={"license-note"}>
          <div class={"copyright"}>© {year()} Sedaia Designs. All Rights Reserved.</div>
          
          <span>
            Website licensed under{" "}
            <a
              href={"https://www.gnu.org/licenses/gpl-3.0.en.html#license-text"}
              class={"link"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              GNU GPL v3.0
            </a>
            ; hosted projects licensed separately.
          </span>
        </div>
      </div>
    </nav>
  );
}