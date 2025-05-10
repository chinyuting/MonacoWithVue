<template>
  <div class="editor-wrapper">
    <div>
      <button @click="executeCode">執行程式</button>
      <button @click="resetConsole">重整</button>
    </div>
    <h3>Console 輸出</h3>
    <div class="output">
      <pre>{{ logs.join('\n') }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, watch } from 'vue'

// debounce 工具函式
function debounce(fn, delay = 1000) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

const code = inject('code')
const logs = ref([])

// 執行程式邏輯
const executeCode = () => {

  const userCode = code.javascript.value

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

// 包一層 debounce
const debouncedExecute = debounce(executeCode, 600)

// 監聽 JS 程式碼變化
watch(() => code.javascript.value, debouncedExecute)

const resetConsole = () => {
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
text-align: left;
}
</style>