import { For, JSX } from "solid-js";
import SEO from "~/components/seo";

type SupportedPlatform = "blender" | "pycharm";

const platforms: Record<SupportedPlatform, { label: string; src: string; href: string }> = {
  blender: {
    label: "Blender",
    src: "/images/platform-icons/blender/blender_logo_socket.svg",
    href: "https://www.blender.org/",
  },
  pycharm: {
    label: "PyCharm",
    src: "/images/platform-icons/pycharm/pycharm_logo.svg",
    href: "https://www.jetbrains.com/pycharm/",
  },
};

interface PluginHeroProps {
  title: string;
  description: string;
  tagline: string;
  backgroundImage: string;
  supportedPlatform?: SupportedPlatform | SupportedPlatform[];
  children?: JSX.Element;
}

export default function PluginHero(props: PluginHeroProps) {
  const platformList = (): SupportedPlatform[] => {
    if (!props.supportedPlatform) return [];
    return Array.isArray(props.supportedPlatform)
      ? props.supportedPlatform
      : [props.supportedPlatform];
  };

  return (
    <header class={"hero"} style={`background-image: url('${props.backgroundImage}');`}>
      <SEO title={props.title} description={props.description} image={props.backgroundImage} />
      <div class={"hero-content"}>
        <h1>{props.title}</h1>
        <p>{props.tagline}</p>
        <p class={"supported-platforms"} style={"display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 10px;"}>
          <span>Supported in:</span>
          <For each={platformList()}>
            {(platform) => {
              const meta = platforms[platform];
              if (!meta) return null;
              return (
                <a
                  href={meta.href}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  aria-label={`${meta.label} website`}
                  style={"display: inline-flex; align-items: center;"}
                >
                  <img
                    class={`platform-icon platform-${platform}`}
                    src={meta.src}
                    alt={`${meta.label} logo`}
                    title={`Supported on ${meta.label}`}
                    height={"50px"}
                    style={"vertical-align: middle;"}
                  />
                </a>
              );
            }}
          </For>
        </p>
        {props.children}
      </div>
      <div class={"background-fade"} />
    </header>
  );
}
