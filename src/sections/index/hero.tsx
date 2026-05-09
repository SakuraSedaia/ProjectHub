import { A } from "@solidjs/router";
import PluginHero from "~/components/ui/plugin-hero";

export default function Hero() {
  return (
    <PluginHero
      title="Tools for Blender artists & developers"
      description="Sakura's Project Hub is the central home for my open-source Blender add-ons and JetBrains plugins."
      tagline="Built to make rigging, animating, and developing for Blender faster and friendlier."
      backgroundImage="/images/headers/sacr.jxl"
    >
      <A href={"/sacr-interface"} class={"btn-primary"}>Explore SACR Interface</A>
    </PluginHero>
  );
}
