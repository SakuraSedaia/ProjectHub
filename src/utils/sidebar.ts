import { createSignal } from "solid-js";

export const [sidebarOpen, setSidebarOpen] = createSignal(true);

export function toggleSidebar() {
  setSidebarOpen((v) => !v);
}
