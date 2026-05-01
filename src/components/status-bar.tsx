import { createSignal, onMount } from "solid-js";

export default function StatusBar() {
  const [year, setYear] = createSignal(new Date().getFullYear());

  onMount(() => {
    setYear(new Date().getFullYear());
  });

  return (
    <footer class={"status-bar"}>
      <div class={"copyright"}>&copy; {year()} Sedaia Designs. All Rights Reserved.</div>
      <div class={"license-note"}>
        Website codebase licensed under{" "}
        <a
          href={"https://www.gnu.org/licenses/gpl-3.0.en.html#license-text"}
          class={"link"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          GNU GPL v3.0
        </a>
        ; hosted projects are licensed separately (see each project's repository).
      </div>
      <div class={"powered-by"}>
        Powered by{" "}
        <a href={"https://solidjs.com"} class={"link"} target={"_blank"} rel={"noopener noreferrer"}>
          SolidJS
        </a>{" "}
        and{" "}
        <a href={"https://vercel.com"} class={"link"} target={"_blank"} rel={"noopener noreferrer"}>
          Vercel
        </a>
      </div>
    </footer>
  );
}
