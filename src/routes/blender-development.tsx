import { ErrorBoundary, Suspense } from "solid-js";
import PluginHero from "~/components/ui/plugin-hero";
import About from "~/sections/plugins/blender-development/about";
import Downloads from "~/sections/plugins/blender-development/downloads";
import Instructions from "~/sections/plugins/blender-development/instructions";
import Issues from "~/sections/plugins/blender-development/issues";
import KnownIssues from "~/sections/plugins/blender-development/known-issues";
import "~/styles/pages/blender-development.scss";

export default function BlenderDevelopment() {
  return (
    <ErrorBoundary fallback={(err) => <p>Failed to load page: {err.message}</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <article class={"plugin-page blenddev-container theme-pycharm"}>
          <PluginHero
            title={"Blender Development"}
            description={"A comprehensive PyCharm plugin for developing and debugging Blender extensions."}
            tagline={"The ultimate PyCharm plugin for developing and debugging Blender extensions with real-time reloading."}
            backgroundImage={"/images/headers/blender-dev.jxl"}
            supportedPlatform={"pycharm"}
          />
          <About />
          <Downloads />
          <Instructions />
          <Issues />
          <KnownIssues />
        </article>
      </Suspense>
    </ErrorBoundary>
  );
}
