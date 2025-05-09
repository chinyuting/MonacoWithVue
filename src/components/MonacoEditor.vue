<template>
  <div>
    <h1>{{ language }}</h1>
    <div ref="editorContainer" class="custom-editor"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, inject } from 'vue'
import * as monaco from 'monaco-editor';

const props = defineProps({
  language: {
    type: String,
    required: true
  }
})

const code = inject('code')

const editorContainer = ref(null)
let editorInstance = null



onMounted(() => {

  editorInstance = monaco.editor.create(editorContainer.value, {
    value: code[props.language].value || '',
    language: props.language,
    theme: 'vs-dark',
    automaticLayout: true,
    fontSize: 14,
    scrollBeyondLastLine: false,
    minimap: { enabled: false },
    tabSize: 2,
    wordWrap: 'on',
    hover: true,
    parameterHints: true,
    suggestOnTriggerCharacters: true,
    autoClosingBrackets: 'always',
  })

  // 🔄 同步內容變化到外部
  editorInstance.onDidChangeModelContent(() => {
    code[props.language].value = editorInstance.getValue()
  })

  editorInstance.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_F, () => {
    editorInstance.getAction('actions.find').run()
  })
})

onBeforeUnmount(() => {
  if (editorInstance) {
    editorInstance.dispose()
  }
})

</script>

<style>
.custom-editor {
  width: calc(100vw / 3);
  height: 50vh;
  padding: 0;
  grid-row: 1;
}

.monaco-editor, .monaco-editor-background, .monaco-scrollable-element {
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>