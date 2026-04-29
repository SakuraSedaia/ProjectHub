import { createContext, createEffect, JSX, useContext } from "solid-js";
import { isServer } from "solid-js/web";

export type Theme = "dark";

export type ThemeContextType = {
  theme: () => Theme;
  resolvedTheme: () => Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

// @ts-ignore
const ThemeContext = createContext<ThemeContextType>({
  theme: () => "dark",
  resolvedTheme: () => "dark",
  setTheme: () => {},
  toggleTheme: () => {}
});

export function ThemeProvider(props: { children: JSX.Element }) {
  createEffect(() => {
    if (isServer) return;
    document.documentElement.setAttribute("data-theme", "dark");
  });

  return (
    <ThemeContext.Provider value={{ 
      theme: () => "dark", 
      resolvedTheme: () => "dark", 
      setTheme: () => {}, 
      toggleTheme: () => {} 
    } as ThemeContextType}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
