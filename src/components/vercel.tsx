import { onMount } from "solid-js";
import { isServer } from "solid-js/web";

/**
 * Vercel component integrates Vercel's developer tools:
 * - Web Analytics
 * - Speed Insights
 * - Vercel Toolbar (Dev Tools)
 */
export function Vercel() {
  if (isServer) return null;

  onMount(async () => {
    try {
      // Import Vercel packages dynamically to ensure they only run on the client
      const [
        { inject },
        { injectSpeedInsights },
        { mountVercelToolbar }
      ] = await Promise.all([
        import("@vercel/analytics"),
        import("@vercel/speed-insights"),
        import("@vercel/toolbar")
      ]);

      // Initialize Analytics
      inject();
      
      // Initialize Speed Insights
      injectSpeedInsights();
      
      // Initialize Vercel Toolbar
      // This will only be visible to authorized users (e.g. signed in to Vercel)
      mountVercelToolbar();
    } catch (error) {
      console.error("Failed to initialize Vercel tools:", error);
    }
  });

  return null;
}
