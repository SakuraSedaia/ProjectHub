import { A } from "@solidjs/router";
import HeroSection from "../../components/ui/hero-section";

export default function Hero() {
  return (
    <HeroSection
      title="Tools for Blender artists & developers"
      description="Sakura's Project Hub is the central home for my open-source Blender add-ons and JetBrains plugins."
      tagline="Built to make rigging, animating, and developing for Blender faster and friendlier."
      backgroundImage="/images/headers/sacr.jxl"
    >
      <A href={"/sakura-rig-utilities"} class={"btn-primary"}>Explore Sakura Rig Utilities</A>
    </HeroSection>
  );
}
