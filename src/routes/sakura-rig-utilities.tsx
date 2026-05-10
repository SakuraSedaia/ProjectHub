import { ErrorBoundary, Suspense } from "solid-js";
import HeroSection from "../components/ui/hero-section";
import About from "~/sections/plugins/sakura-rig-utilities/about";
import Downloads from "~/sections/plugins/sakura-rig-utilities/downloads";
import Instructions from "~/sections/plugins/sakura-rig-utilities/instructions";
import Issues from "~/sections/plugins/sakura-rig-utilities/issues";
import "~/styles/pages/sakura-rig-utilities.scss";

export default function SakuraRigUtilities() {
  return (
    <ErrorBoundary fallback={(err) => <p>Failed to load page: {err.message}</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <article class={"plugin-page sru-container theme-blender"}>
          <HeroSection
            title={"Sakura Rig Utilities"}
            description={"A custom Blender interface designed to streamline and enhance your workflow when using the Sakura Minecraft Character Rig."}
            tagline={"The ultimate companion for managing and customizing your Sakura Minecraft Rigs."}
            backgroundImage={"/images/headers/sr-gui.jxl"}
            supportedPlatform={"blender"}
          >
            <div class={"hero-cta"}>
              <a href={"#downloads"} class={"btn-primary"}>Download Extension</a>
            </div>
          </HeroSection>
          <About />
          <Downloads />
          <Instructions />
          <Issues />
        </article>
      </Suspense>
    </ErrorBoundary>
  );
}
