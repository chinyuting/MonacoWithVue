<template>
  <div class="editor-wrapper">
    <div>
      <button @click="runCode">執行程式</button>
      <button @click="resetConsole">重整</button>
    </div>
    <h3>Console 輸出</h3>
    <div class="output">
      <pre>{{ logs.join('\n') }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'

const code = inject('code')
const jsCode = ref(code.javascript.value)

const logs = ref([])

const runCode = () => {

  const userCode = code.javascript.value // 這是從其他 component 傳進來的 JS 程式碼字串

  const customConsole = {
    log: (...args) => {
      logs.value.push(args.map(String).join(' '))
    }
  }

  try {
    const func = new Function('console', userCode)
    func(customConsole)
  } catch (err) {
    logs.value.push('錯誤：' + err.message)
  }
}

const resetConsole = ()=>{
  logs.value = []
}
</script>

<style scoped>
.editor-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.editor {
  height: 200px;
  border: 1px solid #ccc;
}

.output {
  background: #f9f9f9;
  border: 1px solid #ccc;
  padding: 1rem;
  min-height: 100px;
}
</style>