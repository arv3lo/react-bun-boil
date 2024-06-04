/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    ...configDefaults,
    globals: true,
    environment: "jsdom",
    coverage: {
      enabled: true,
      reporter: ["html", "json", "json-summary"],
      reportOnFailure: true,
      thresholds: {
        statements: 25,
        functions: 25,
        branches: 25,
        lines: 25,
      },
    },
  },
});
