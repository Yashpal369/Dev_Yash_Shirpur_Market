import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      onwarn: (warning, warn) => {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
        warn(warning);
      }
    }
  },
  optimizeDeps: {
    exclude: ['fsevents']
  }
}));
