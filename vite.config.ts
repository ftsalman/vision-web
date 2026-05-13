import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this; wrangler.jsonc main alone is insufficient.
export default defineConfig(() => {
  const isVercel = process.env.VERCEL === "1" || process.env.NITRO_PRESET?.startsWith("vercel");
  const start = tanstackStart({
    server: { entry: "server" },
  });

  return {
    plugins: [
      ...(isVercel
        ? [start, nitro({ preset: "vercel" })]
        : [cloudflare({ viteEnvironment: { name: "ssr" } }), start]),
      react(),
      tailwindcss(),
      tsconfigPaths(),
    ],
  };
});
