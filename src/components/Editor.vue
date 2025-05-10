<template>
  <div class="container">
    <p>{{ language }}</p>
    <div class="editor-wrapper">
      <MonacoEditor
        v-model:value="code"
        :language="language"
        :theme="theme"
        :options="editorOptions"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import MonacoEditor from '@guolao/vue-monaco-editor';

const props = defineProps({
  language: {
    type: String,
    required: true
  }
})

const codeForEditor = inject('code')

const code = ref(codeForEditor[props.language]);
const language = ref(props.language);
const theme = ref('vs-dark');
const editorOptions = ref({
  automaticLayout: true,
  scrollbar: {
    scrollDuration: 0 // 減少滾動動畫
  },
  fontSize: 14,
  tabSize: 2,
  minimap: { enabled: true },
  scrollBeyondLastLine: false,
  roundedSelection: false,
  renderLineHighlight: 'all',
  cursorBlinking: 'blink',
  wordWrap: 'on',
  hover: true,
  parameterHints: { enabled: true },
});
</script>

<style>
.container {
  max-width: calc(100vw / 3);
  margin: 0 auto;
}

.editor-wrapper {
  width: 100%;
  height: 200px;
  border: 1px solid transparent;
}

.editor {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.controls {
  margin-top: 20px;
}

select {
  padding: 5px;
  margin-left: 10px;
}
</style>