import { Title } from "@solidjs/meta";
import { ErrorBoundary, Suspense } from "solid-js";
import Community from "~/sections/index/community";
import Help from "~/sections/index/help";
import Hero from "~/sections/index/hero";
import Platforms from "~/sections/index/platforms";
import Projects from "../sections/index/projects";
import Spotlight from "~/sections/index/spotlight";
import Updates from "~/sections/index/updates";

export default function Home() {
  return (
    <ErrorBoundary fallback={(err) => <p>Error: {err.message}</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <article class={"home"}>
          <Title>Home - Project Hub</Title>
          <Hero />
          {/*<Help />*/}
          <Projects />
          <Spotlight />
          <Platforms />
          <Updates />
          <Community />
        </article>
      </Suspense>
    </ErrorBoundary>
  );
}
