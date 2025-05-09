<!-- <template>
  <div>
    <h1>{{ language }}</h1>
    <div ref="editorContainer" class="editor-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, inject } from 'vue'
import MonacoEditorWrapper from 'monaco-editor-wrapper'

const props = defineProps({
  language: {
    type: String,
    required: true
  }
})

const code = inject('code')
const editorContainer = ref(null)
let editorInstance = null

onMounted(async () => {
  editorInstance = new MonacoEditorWrapper()

  await editorInstance.init({
    htmlElement: editorContainer.value,
    language: props.language,
    value: code[props.language].value || '',
    theme: 'vs-dark',
    editorOptions: {
      automaticLayout: true,
      fontSize: 14,
      wordWrap: 'on',
      minimap: { enabled: false },
      scrollBeyondLastLine: false
    }
  })

  editorInstance.getMonacoEditor().onDidChangeModelContent(() => {
    code[props.language].value = editorInstance.getMonacoEditor().getValue()
  })
})

onBeforeUnmount(() => {
  if (editorInstance) editorInstance.dispose()
})
</script>

<style>
.editor-container {
  width: 100%;
  height: 400px;
}
</style> -->