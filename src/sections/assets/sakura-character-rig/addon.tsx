import { A } from "@solidjs/router";

export default function Addon() {
  return (
    <section id={"sacr-addon"}>
      <div class={"heading"}>
        <h1>Extension</h1>
      </div>
      <div class={"standard-container"}>
        <p>
          View the associated Extension here: <A href={"/sakura-rig-utilities"} class={"link"}>Sakura Rig Utilities</A>
        </p>
      </div>
    </section>
  );
}
