import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 2603, // Change this to whatever port you want
  },
  plugins: [react(), tailwindcss()],
});
