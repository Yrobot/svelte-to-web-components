import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        "my-badge": "src/components/my-badge.wc.svelte",
        "my-button": "src/components/my-button.wc.svelte",
      },
      formats: ["es"],
      fileName: (format, entryName) => `${entryName}.js`,
    },
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
