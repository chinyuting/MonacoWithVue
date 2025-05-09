// src/monaco-setup.js
import * as monaco from 'monaco-editor';

if (typeof window !== 'undefined') {
  // 為 Monaco 編輯器設置全球環境
  window.MonacoEnvironment = {
    getWorkerUrl(moduleId, label) {
      if (label === 'json') {
        return '/_monaco/json.worker.js';
      }
      if (label === 'css' || label === 'scss' || label === 'less') {
        return '/_monaco/css.worker.js';
      }
      if (label === 'html' || label === 'handlebars' || label === 'razor') {
        return '/_monaco/html.worker.js';
      }
      if (label === 'typescript' || label === 'javascript') {
        return '/_monaco/ts.worker.js';
      }
      return '/_monaco/editor.worker.js';
    }
  };
}

export default monaco;