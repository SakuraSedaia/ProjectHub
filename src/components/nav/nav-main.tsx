import { Show } from "solid-js";
import { A } from "@solidjs/router";
import { isVercelActivated } from "~/utils/vercel";
import IconBundle from "~/components/icon-bundle";

export default function NavMain() {
  return (
    <nav class={"nav-main"}>
      <ul>
        <li><A href="/" end={true}>Home</A></li>
        <li>
          <span>Projects <IconBundle name={"arrow-down"} /></span>
          <ul>
            <li><A href="/sacr-interface" end={true}>SACR Interface</A></li>
            <li><A href="/blender-development" end={true}>Blender Development</A></li>
          </ul>
        
        </li>
        <Show when={isVercelActivated()}>
          <li><A href="/component-map" end={true}>Component Map</A></li>
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