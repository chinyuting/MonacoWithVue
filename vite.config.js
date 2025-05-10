import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import * as monacoPlugin from 'vite-plugin-monaco-editor';

export default defineConfig({
  plugins: [
    vue(),
    // 假设 plugin 方法是正确的入口点
    monacoPlugin.default.plugin ? monacoPlugin.default.plugin({
      languageWorkers: [
        'editorWorkerService',
        'css',
        'html',
        'javascript',
        'typescript',
        'json'
      ]
    }) : undefined,
  ],
  resolve: {
    alias: {
      // 如果需要，可以添加别名
    },
  },
  optimizeDeps: {
    include: ['monaco-editor/esm/vs/editor/editor.api'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'monaco-editor': ['monaco-editor'],
        },
      },
    },
  },
});