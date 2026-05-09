import { Title } from "@solidjs/meta";
import { ErrorBoundary, Suspense } from "solid-js";
import SEO from "~/components/seo";
import Community from "~/sections/index/community";
import Hero from "~/sections/index/hero";
import Projects from "../sections/index/projects";
import Spotlight from "~/sections/index/spotlight";
import Updates from "~/sections/index/updates";

export default function Home() {
  return (
    <ErrorBoundary fallback={(err) => <p>Error: {err.message}</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <article class={"home-container"}>
          <SEO 
            title="Home" 
            description="Sakura's Project Hub - A collection of Blender add-ons, PyCharm plugins, and other development projects."
          />
          <Hero />
          <Projects />
          <Spotlight />
          <Updates />
          <Community />
        </article>
      </Suspense>
    </ErrorBoundary>
  );
}
