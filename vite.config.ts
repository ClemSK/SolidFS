import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
// import GlobalPolyFill from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  plugins: [
    {
      ...(await import('@mdx-js/rollup')).default({
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'solid-mdx',
      }),
      enforce: 'pre',
    },
    solid({ ssr: false, extensions: ['.mdx', '.md'] }),
  ],
  optimizeDeps: {
    exclude: ['postgres'],
  },
  ssr: { external: ['@prisma/client'] },
});
