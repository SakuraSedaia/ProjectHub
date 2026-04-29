import { Title } from "@solidjs/meta";
import { ErrorBoundary, Suspense } from "solid-js";
import Counter from "~/components/counter";

export default function Home() {
  return (
    <ErrorBoundary fallback={(err) => <p>Error: {err.message}</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <article class={"home"}>
          <Title>Hello World</Title>
          <header>
            <h1>Hello world!</h1>
          </header>
          <section>
            <Counter />
            <p>
              Visit{" "}
              <a href="https://start.solidjs.com" target="_blank" rel="noreferrer">
                start.solidjs.com
              </a>{" "}
              to learn how to build SolidStart apps.
            </p>
          </section>
        </article>
      </Suspense>
    </ErrorBoundary>
  );
}
