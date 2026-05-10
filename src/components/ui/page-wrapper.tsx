import { ErrorBoundary, Suspense, JSX } from "solid-js";

interface PageWrapperProps {
  children: JSX.Element;
  class?: string;
  fallback?: JSX.Element;
}

export default function PageWrapper(props: PageWrapperProps) {
  const defaultFallback = <div class="standard-container">Loading...</div>;
  const errorFallback = (err: any) => <div class="standard-container">Error: {err.message}</div>;

  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={props.fallback || defaultFallback}>
        <article class={props.class}>
          {props.children}
        </article>
      </Suspense>
    </ErrorBoundary>
  );
}
