import { MetaProvider, Title, Link } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary, Suspense } from "solid-js";
import { ThemeProvider } from "./components/theme/theme-context";
import { Vercel } from "./components/vercel";
import "./app.scss";
import NavSidebar from "./components/nav/nav-sidebar";
import RibbonHeader from "~/components/ribbon-header";
import { sidebarOpen } from "~/utils/sidebar";

export default function App() {
  return (
    <Router
      root={props => (
        <ThemeProvider>
          <MetaProvider>
            <Vercel />
            <Title>Project Hub</Title>
            <Link rel="icon" type="image/x-icon" href="/favicon.ico?v=1" />
            <Link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=1" />
            <div class={`viewport ${sidebarOpen() ? "sidebar-open" : "sidebar-closed"}`}>
              <RibbonHeader />
              <NavSidebar />
              <main class={"content"}>
                <ErrorBoundary fallback={(err) => <p>Application error: {err.message}</p>}>
                  <Suspense>{props.children}</Suspense>
                </ErrorBoundary>
              </main>
            </div>
          </MetaProvider>
        </ThemeProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
