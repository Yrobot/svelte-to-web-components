import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: "./index.html",
        // web components
        "my-badge": "src/components/my-badge.svelte",
        "my-button": "src/components/my-button.svelte",
        "my-dropdown": "src/components/my-dropdown.svelte",
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return `${chunkInfo.name?.includes("-") ? "wc" : "assets"}/${
            chunkInfo.name
          }.js`;
        },
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    outDir: "dist",
  },
  plugins: [
    svelte({
      preprocess: vitePreprocess(),
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
});
