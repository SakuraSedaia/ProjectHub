import { A } from "@solidjs/router";

export default function Addon() {
  return (
    <section id={"sacr-addon"}>
      <div class={"heading"}>
        <h1>Extension</h1>
      </div>
      <div class={"standard-container"}>
        <p>
          View the associated Extension here: <A href={"/sacr-interface"} class={"link"}>SACR Blender Addon</A>
        </p>
      </div>
    </section>
  );
}
