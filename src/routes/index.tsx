import { ErrorBoundary, Suspense } from "solid-js";
import SEO from "~/components/seo";
import Community from "~/sections/index/community";import { A } from "@solidjs/router";
import HeroSection from "~/components/ui/hero-section";
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
          <HeroSection
            title="Tools for Blender artists & developers"
            description="Sakura's Project Hub is the central home for my open-source Blender add-ons and JetBrains plugins."
            tagline="Built to make rigging, animating, and developing for Blender faster and friendlier."
            backgroundImage="/images/headers/sacr.jxl"
          >
            <A href={"/sakura-rig-utilities"} class={"btn-primary"}>Explore Sakura Rig Utilities</A>
          </HeroSection>
          <Projects />
          <Spotlight />
          <Updates />
          <Community />
        </article>
      </Suspense>
    </ErrorBoundary>
  );
}
