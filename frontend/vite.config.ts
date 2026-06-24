import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: [
      "shpatakovskyid.pp.ua",
      "192.168.56.10",
      "localhost",
      "monitor-frontend",
    ]
  },
});