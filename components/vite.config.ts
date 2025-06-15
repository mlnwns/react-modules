import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "@emotion/styled", "@emotion/react"],
      output: {
        globals: {
          react: "React",
          "@emotion/styled": "styled",
          "@emotion/react": "emotionReact",
        },
      },
    },
    commonjsOptions: {
      esmExternals: ["react", "@emotion/styled", "@emotion/react"],
    },
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      plugins: [["@swc/plugin-emotion", {}]],
    }),
    dts({ include: ["src/lib"], tsconfigPath: "tsconfig.app.json" }),
  ],
});
