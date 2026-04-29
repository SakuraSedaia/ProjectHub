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
    </nav>
  );
}