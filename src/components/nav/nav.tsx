import { createSignal, JSX, Show, createMemo } from "solid-js";
import { A } from "@solidjs/router";
import { closeSidebar } from "~/utils/sidebar";
import IconBundle from "~/components/icon-bundle";

interface NavRouterProps {
  children: JSX.Element;
  class?: string;
}

interface NavSubRouterProps {
  children: JSX.Element;
  class?: string;
  title?: string;
  count?: number;
}

interface NavItemProps {
  children: JSX.Element;
  class?: string;
  path: string;
}

export function NavRouter(props: NavRouterProps) {
  return (
    <ul class={props.class}>
      {props.children}
    </ul>
  )
}

export function NavSubRouter(props: NavSubRouterProps) {
  const [subNavOpen, setSubNavOpen] = createSignal(false);
  const itemHeight = 2.5; // Matches $nav-item-height in SCSS

  const subNavHeight = createMemo(() => {
    if (!subNavOpen()) return 0;
    return (props.count ?? 0) * itemHeight;
  });

  function toggleSubNav() {
    setSubNavOpen(!subNavOpen());
  }
  
  return (
    <li class={props.class}>
      <span onClick={toggleSubNav}>{props.title} <IconBundle name={"arrow-down"} class={subNavOpen() ? "open" : ""} /></span>
      <div class={`sub-nav-container`} style={{ height: `${subNavHeight()}rem` }}>
        <ul>
          {props.children}
        </ul>
      </div>
    </li>
  )
}

export function NavItem(props: NavItemProps) {
  return (
    <li class={props.class}>
      <Show
        when={props.path.startsWith("https")}
        fallback={
          <A href={props.path} end={true} onClick={closeSidebar}>
            {props.children}
          </A>
        }
      >
        <a href={props.path} target={"_blank"} class={props.class} rel={"noopener noreferrer"}>
          {props.children}
        </a>
      </Show>
    </li>
  );
}
