import { cache, createAsync, useParams, A } from "@solidjs/router";
import { Show, Suspense, ErrorBoundary, For, createMemo } from "solid-js";
import { SolidMarkdown } from "solid-markdown";
import PluginHero from "~/components/ui/plugin-hero";
import SEO from "~/components/seo";
import "~/styles/pages/changelog.scss";

interface SubSection {
  title: string;
  content: string;
}

interface ChangelogSection {
  title: string;
  id: string;
  subSections: SubSection[];
  content: string;
}

const changelogs = import.meta.glob("../../markdown/changelogs/*.md", {
  query: "?raw",
  import: "default",
});

const getChangelog = cache(async (item: string | undefined) => {
  if (!item) return null;

  try {
    const decodedItem = decodeURIComponent(item);
    const filename = `${decodedItem}.md`.toLowerCase();
    const keys = Object.keys(changelogs);

    const match = keys.find((key) => {
      const normalizedKey = key.toLowerCase().replace(/\\/g, "/");
      return normalizedKey.endsWith(filename);
    });

    if (match) {
      const content = await changelogs[match]();
      if (typeof content === "string") return content;
      if (content && typeof content === "object" && "default" in content) {
        return typeof (content as any).default === "string"
          ? (content as any).default
          : JSON.stringify((content as any).default);
      }
      return String(content);
    }

    return `# Changelog not found\nThe requested changelog "${decodedItem}" could not be found.`;
  } catch (e: any) {
    console.error("Failed to load changelog:", e);
    return `# Error loading changelog\nThere was a problem loading the changelog content: ${e.message}`;
  }
}, "changelogs");

export default function Changelog() {
  const params = useParams();
  const content = createAsync(() => getChangelog(params.changelog));

  const parseChangelog = (content: string): ChangelogSection[] => {
    if (!content) return [];
    const lines = content.split("\n");
    const sections: ChangelogSection[] = [];
    let currentSection: ChangelogSection | null = null;

    lines.forEach((line) => {
      if (line.startsWith("## ")) {
        if (currentSection) {
          sections.push(currentSection);
        }
        currentSection = {
          title: line.replace("## ", "").trim(),
          id: line.replace("## ", "").trim().toLowerCase().replace(/\s+/g, "-"),
          subSections: [],
          content: "",
        };
      } else if (line.startsWith("### ")) {
        if (currentSection) {
          currentSection.subSections.push({
            title: line.replace("### ", "").trim(),
            content: "",
          });
        }
      } else if (currentSection) {
        if (currentSection.subSections.length > 0) {
          currentSection.subSections[currentSection.subSections.length - 1].content += line + "\n";
        } else {
          currentSection.content += line + "\n";
        }
      }
    });

    if (currentSection) {
      sections.push(currentSection);
    }

    return sections;
  };

  const getTitle = (data: string) => {
    const titleLine = data.split("\n").find((l) => l.startsWith("# "));
    return titleLine ? titleLine.replace("# ", "").trim() : (params.changelog || "Changelog");
  };

  const title = createMemo(() => {
    const data = content();
    return data ? getTitle(data) : "";
  });

  const sections = createMemo(() => {
    const data = content();
    return data ? parseChangelog(data) : [];
  });

  return (
    <ErrorBoundary fallback={(err) => <p>Failed to load changelog: {err.message}</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <Show when={content()}>
          {(data) => (
              <article class={"changelog-page"}>
                <SEO
                  title={`Changelog: ${title()}`}
                  description={`Detailed changelog and update history for ${title()}.`}
                  image={"/images/headers/sr-gui.jxl"}
                />
                <PluginHero
                  title={`Changelog: ${title()}`}
                  description={`Detailed changelog and update history for ${title()}.`}
                  tagline={"Track the latest changes and improvements."}
                  backgroundImage={"/images/headers/sr-gui.jxl"}
                />
              <main class={"content-container"}>
                <section class={"changelog-content"}>
                  <For each={sections()}>
                    {(section) => (
                      <div id={section.id} class="changelog-section">
                        <div class="heading">
                          <h2>{section.title}</h2>
                        </div>

                        <Show when={section.content.trim()}>
                          <SolidMarkdown
                            children={section.content}
                            components={{
                              p: (props) => <p style={{ "white-space": "pre-line" }} {...props} />,
                              ul: (props) => <ul {...props} />,
                              li: (props) => <li {...props} />,
                              a: (props: any) => {
                                const isInternal = props.href?.startsWith("/") && !props.href?.startsWith("//");
                                return isInternal ? <A {...props} class="link" /> : <a {...props} class="link" />;
                              },
                            }}
                          />
                        </Show>

                        <For each={section.subSections}>
                          {(sub) => (
                            <div class="changelog-subsection">
                              <h3>{sub.title}</h3>
                              <SolidMarkdown
                                children={sub.content}
                                components={{
                                  p: (props) => <p style={{ "white-space": "pre-line" }} {...props} />,
                                  ul: (props) => <ul {...props} />,
                                  li: (props) => <li {...props} />,
                                  a: (props: any) => {
                                    const isInternal = props.href?.startsWith("/") && !props.href?.startsWith("//");
                                    return isInternal ? <A {...props} class="link" /> : <a {...props} class="link" />;
                                  },
                                }}
                              />
                            </div>
                          )}
                        </For>
                      </div>
                    )}
                  </For>
                </section>
              </main>
            </article>
          )}
        </Show>
      </Suspense>
    </ErrorBoundary>
  );
}
