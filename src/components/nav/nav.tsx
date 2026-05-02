import { JSX } from "solid-js";
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
  return (
    <li class={props.class}>
      <span>{props.title} <IconBundle name={"arrow-down"} /></span>
      <ul>
        {props.children}
      </ul>
    </li>
  )
}

export function NavItem(props: NavItemProps) {
  const path = props.path;

  let link: JSX.Element;
  if (path.startsWith("https")) {
    link = <a href={path} target={"_blank"} class={props.class} rel={"noopener noreferrer"}>{props.children}</a>
  } else {
    link = <A href={path} end={true} onClick={closeSidebar}>{props.children}</A>
  }

  return (
    <li class={props.class}>
      {link}
    </li>
  )
}
