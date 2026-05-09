import { A } from "@solidjs/router";

export default function Spotlight() {
  return (
    <section class={"home-spotlight"} aria-label={"Blender Development spotlight"}>
      <div class={"standard-container"}>
        <div class={"spotlight-card"}>
          <div class={"spotlight-body"}>
            <h2>Blender Development for PyCharm</h2>
            <p>
              Develop and debug Blender extensions like any other Python
              project — with hot-reloading, integrated linting via
              fake-bpy-module, sandboxed runs, and full cross-platform
              support.
            </p>
            <A href={"/blender-development"} class={"btn-primary"}>Open the plugin page</A>
          </div>
          <div class={"spotlight-visual"} aria-hidden={"true"} />
        </div>
      </div>
    </section>
  );
}
