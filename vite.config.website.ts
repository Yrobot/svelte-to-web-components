import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import fs from "node:fs";

// {filename: path}
const getWCEntries = (dir: string): Record<string, string> => {
  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".svelte"));
  return files.reduce(
    (pre = {}, file) => ({ ...pre, [file.split(".")[0]]: `${dir}/${file}` }),
    {}
  );
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: "./index.html",
        // web components
        ...getWCEntries("src/components"),
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
