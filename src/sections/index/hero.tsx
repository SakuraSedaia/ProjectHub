import { A } from "@solidjs/router";

export default function Hero() {
  return (
    <section class={"home-hero"} aria-label={"Featured project"}>
      <div class={"hero-content"}>
        <h1>Tools for Blender artists & developers</h1>
        <p>
          Sakura's Project Hub is the central home for my open-source
          Blender add-ons and JetBrains plugins — built to make rigging,
          animating, and developing for Blender faster and friendlier.
        </p>
        <A href={"/sacr-interface"} class={"btn-primary"}>Explore SACR Interface</A>
      </div>
      {/*<div class={"hero-visual"} aria-hidden={"true"} />*/}
    </section>
  );
}
