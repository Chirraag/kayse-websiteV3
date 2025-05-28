import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Listen on all network interfaces
    allowedHosts: [
      "0974a736-64cd-4360-a7f3-c124160c89d6-00-3ebr5684su9bi.pike.replit.dev",
      "kayse-ai.replit.app", // Added blocked host
    ],
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
