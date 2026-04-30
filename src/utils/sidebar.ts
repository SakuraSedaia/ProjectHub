import { createSignal } from "solid-js";

export const [sidebarOpen, setSidebarOpen] = createSignal(false);

export function toggleSidebar() {
  setSidebarOpen((v) => !v);
}
