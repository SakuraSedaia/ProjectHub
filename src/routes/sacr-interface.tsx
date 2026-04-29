import { Title } from "@solidjs/meta";
import { ErrorBoundary, Suspense } from "solid-js";
import PluginHero from "~/components/ui/plugin-hero";
import About from "~/sections/plugins/sacr-interface/about";
import Downloads from "~/sections/plugins/sacr-interface/downloads";
import Instructions from "~/sections/plugins/sacr-interface/instructions";
import Issues from "~/sections/plugins/sacr-interface/issues";
import "~/styles/pages/sacr-interface.scss";

export default function SacrInterface() {
  return (
    <ErrorBoundary fallback={(err) => <p>Failed to load page: {err.message}</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <article class={"plugin-page sacr-container theme-blender"}>
          <Title>SACR Interface - Project Hub</Title>
          <PluginHero
            title={"SACR Interface"}
            description={"A custom Blender interface designed to simplify and enhance the workflow for using the Sakura Minecraft Character Rig."}
            tagline={"The ultimate Blender plugin for importing and managing the Sakura Minecraft Character Rig."}
            backgroundImage={"/images/headers/sr-gui.jxl"}
            supportedPlatform={"blender"}
          />
          <About />
          <Downloads />
          <Instructions />
          <Issues />
        </article>
      </Suspense>
    </ErrorBoundary>
  );
}
