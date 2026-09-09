import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Actions supplies the actual Pages base, including custom domains.
export default defineConfig({
  plugins: [react()],
  base: process.env.PAGES_BASE || "./",
});
