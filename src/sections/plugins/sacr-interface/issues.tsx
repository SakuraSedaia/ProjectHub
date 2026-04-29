import { NoHydration } from "solid-js/web";

export default function Issues() {
  return (
    <NoHydration>
      <section id={"sacr-issues"}>
        <div class={"heading"}>
          <h1>Issues</h1>
        </div>
        <div class={"standard-container"}>
          <p>
            For any bugs, feature requests, or general issues, please file a report on the <a href={"https://codeberg.org/SakuraSedaia/Sakura-Rig-Interfaces/issues"} class={"link"} target="_blank">Codeberg repository</a>.
          </p>
        </div>
      </section>
    </NoHydration>
  );
}
