import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Listen on all network interfaces
    allowedHosts: [
      "b4b51863-8eaf-467c-b193-e0eca855e89b-00-thkgcqw6fgaa.pike.replit.dev",
      "kayse-ai.replit.app", // Added blocked host
    ],
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
