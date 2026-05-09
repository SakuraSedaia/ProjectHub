import { A } from "@solidjs/router";

export default function Help() {
  return (
    <section class={"home-help"} aria-label={"Quick links"}>
      <div class={"help-card"}>
        <h2>Looking for a specific project?</h2>
        <form class={"help-search"} onSubmit={(e) => e.preventDefault()}>
          <input
            type={"search"}
            placeholder={"Search projects, plugins, or changelogs"}
            aria-label={"Search projects"}
          />
          <button type={"submit"} aria-label={"Search"}>→</button>
        </form>
        <div class={"help-suggestions"}>
          <A href={"/sakura-rig-utilities"}>Sakura Rig Utilities</A>
          <A href={"/blender-development"}>Blender Development</A>
          <A href={"/changelog"}>Latest changelog</A>
        </div>
      </div>
    </section>
  );
}
