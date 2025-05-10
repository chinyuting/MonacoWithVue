<template>
  <iframe
    ref="previewIframe"
    style="width: 100%; height: 300px; border: 1px solid #ccc;"
    :srcdoc="iframeContent"
  ></iframe>
</template>

<script setup>
import { inject, ref, watch } from 'vue'
import debounce from 'lodash.debounce'

const code = inject('code')
const iframeContent = ref('')

// 定義產生 HTML 的方法
const generateIframeContent = () => {
  iframeContent.value = `
    <html>
      <head>
        <style>${code.css.value}</style>
      </head>
      <body>
        ${code.html.value}
        <script>
          ${code.javascript.value}
        <\/script>
      </body>
    </html>
  `
}

// 防抖後的更新函式
const debouncedUpdate = debounce(generateIframeContent, 1000)

// 監聽三段 code，只要有變動就觸發更新
watch(
  [() => code.html.value, () => code.css.value, () => code.javascript.value],
  debouncedUpdate,
  { immediate: true }
)
</script>

<!-- <script setup>
import { inject, computed } from 'vue'

// 從外部注入 code（包含 html/css/js 三段程式碼）
const code = inject('code')

// 組合 iframe 的 srcdoc：即時渲染
const iframeContent = computed(() => {
  return `
    <html>
      <head>
        <style>${code.css.value}</style>
      </head>
      <body>
        ${code.html.value}
        <script>
          ${code.javascript.value}
        <\/script>
      </body>
    </html>
  `
})
</script> -->