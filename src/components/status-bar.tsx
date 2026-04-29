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
          href={"https://opensource.org/license/bsd-3-clause"}
          class={"link"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          BSD 3-Clause
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
