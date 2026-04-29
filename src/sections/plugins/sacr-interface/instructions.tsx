import { NoHydration } from "solid-js/web";
import { A } from "@solidjs/router";

export default function Instructions() {
  return (
    <NoHydration>
      <section id={"sacr-instructions"}>
        <div class={"heading"}>
          <h1>Instructions</h1>
        </div>
        <div class={"standard-container"}>
          <h3>Recommended Install</h3>
          <p>
            This method is the most recommended as it allows for easy installation and updates of the addon without needing to manually download and install it every time.
          </p>
          <ol class={"styled-list"}>
            <li>Open Blender, and navigate to User Preferences &gt; Get Extensions</li>
            <li>If Needed, enable Online Access</li>
            <li>Search for and install "Sakura's Rig Interface"</li>
            <li>Check Addon to ensure it is enabled</li>
            <li>Download the appropriate Rig from <A href="/asset/sakura-character-rig" class={"link"}>the SACR page</A></li>
            <li>Open the Rig and enjoy</li>
          </ol>
          <h3>Manual Install</h3>
          <p>To get started with SACR Interface, follow these steps:</p>
          <ol class={"styled-list"}>
            <li>Download the Latest release of SACR Interface Addon from either the downloads section above or the <a href="https://extensions.blender.org/add-ons/sakura-rig-interfaces/" class={"link"} target="_blank">Blender Extensions</a> site</li>
            <li>Open Blender, and navigate to User Preferences &gt; Addons</li>
            <li>Open the Dropdown Arrow on the Top Right</li>
            <li>Select "Install From Disk" and install the SACR Interface Addon</li>
            <li>Check Addon to ensure it is enabled</li>
            <li>Download the appropriate Rig from <A href="/asset/sakura-character-rig" class={"link"}>the SACR page</A></li>
            <li>Open the Rig and enjoy</li>
          </ol>
        </div>
      </section>
    </NoHydration>
  );
}
