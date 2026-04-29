import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <article class={"not-found"}>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <header>
        <h1>Page Not Found</h1>
      </header>
      <section>
        <p>
          Visit{" "}
          <a href="https://start.solidjs.com" target="_blank" rel="noreferrer">
            start.solidjs.com
          </a>{" "}
          to learn how to build SolidStart apps.
        </p>
      </section>
    </article>
  );
}
