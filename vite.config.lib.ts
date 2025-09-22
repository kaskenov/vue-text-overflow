import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
      include: [
        'src/components/**/*.vue',
        'src/components/**/*.ts',
        'src/lib.ts',
      ],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      name: 'VueTextOverflow',
      fileName: 'vue-text-overflow',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
});
