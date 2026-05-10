import { ErrorBoundary, Suspense } from "solid-js";
import PluginHero from "~/components/ui/plugin-hero";
import DeprecationNotice from "~/components/ui/deprecation-notice";
import About from "~/sections/assets/sacr-interface/about";
import Downloads from "~/sections/assets/sacr-interface/downloads";
import Addon from "~/sections/assets/sacr-interface/addon";
import "~/styles/pages/sacr-interface.scss";

export default function SacrInterface() {
  return (
    <ErrorBoundary fallback={(err) => <div class="standard-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="standard-container">Loading...</div>}>
        <article class={"plugin-page sacr-rig-container theme-blender"}>
          <PluginHero
            title={"Sakura Minecraft Character Rig"}
            description={"Download and learn how to use the Sakura Minecraft Character Rig, a highly flexible and powerful tool for Minecraft animations."}
            tagline={"The flagship rig Sakura Rig Utilities is built around — a fully featured Minecraft character rig for animators and artists."}
            backgroundImage={"/images/headers/sacr.jxl"}
            supportedPlatform={"blender"}
          />
          <DeprecationNotice message={"Following R7.4.1, SACR will no longer be released as an individual asset. From here on out, SACR will be bundled exclusively with Sakura Rig Utilities starting with V4."}/>
          <About />
          <Downloads />
          <Addon />
        </article>
      </Suspense>
    </ErrorBoundary>
  );
}
