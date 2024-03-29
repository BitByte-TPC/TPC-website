import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import browserslistToEsbuild from 'browserslist-to-esbuild';

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '/webix.iiitdmj.ac.in/',
    build: {
        outDir: 'build',
        target: browserslistToEsbuild(),
    },
    plugins: [react(), viteTsconfigPaths()],
    server: {
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3000
        port: 3000,
    },
});
