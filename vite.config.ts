import { defineConfig } from "vite";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
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
    lib: {
      entry: {
        ...getWCEntries("src/components"),
      },
      formats: ["es"],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    outDir: "web-components",
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
