    // vite.config.js
    import { defineConfig } from 'vite';
    import tailwindcss from '@tailwindcss/vite';

    export default defineConfig({
      plugins: [
        tailwindcss(),
        // other plugins like react(), vue(), etc.
      ],
    test: { environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.js",
    },
    });