import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-query",
      "@tanstack/react-start",
    ],
  },
  plugins: [
    tanstackStart({ server: { entry: "server" } }),
    nitro({
      preset: "vercel",
      vercel: {
        // Node entry format to prevent runtime.node crash with srvx
        entryFormat: "node",
      },
    }),
    viteReact(),
    tailwindcss(),
    viteTsConfigPaths(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-router": [
            "@tanstack/react-router",
            "@tanstack/react-query",
            "@tanstack/react-start",
          ],
          "vendor-utils": [
            "zod",
            "react-hook-form",
            "sonner",
            "tailwind-merge",
            "class-variance-authority",
          ],
        },
      },
    },
  },
});
