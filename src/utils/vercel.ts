import { isServer } from "solid-js/web";
import { createSignal } from "solid-js";

const [isActivated, setIsActivated] = createSignal(false);

if (!isServer) {
  const check = () => {
    const toolbar = (window as any).__vercel_toolbar;
    const hasCookie = document.cookie.includes("__vercel_toolbar=");
    const hasElement = !!document.querySelector("vercel-live-feedback");
    const activated = !!toolbar?.isAuthenticated || hasCookie || hasElement;
    
    if (activated !== isActivated()) {
      setIsActivated(activated);
    }
  };

  // Initial check
  check();

  // Listen for Vercel Toolbar events
  window.addEventListener("vercel-toolbar-ready", check);
  
  // Fallback checks as the toolbar loads asynchronously
  setTimeout(check, 1000);
  setTimeout(check, 3000);
  setTimeout(check, 5000);
}

/**
 * Checks if a Vercel-activated client is detected.
 * 
 * A client is considered "activated" if the Vercel Toolbar is present and 
 * the user is authenticated, or if the Vercel Toolbar cookie is set.
 * 
 * This function is reactive when called within a SolidJS tracking scope.
 * 
 * @returns {boolean} True if the Vercel Toolbar is activated.
 */
export function isVercelActivated(): boolean {
  return isActivated();
}
