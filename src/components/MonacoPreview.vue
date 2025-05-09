<template>
  <iframe
    ref="previewIframe"
    style="width: 100%; height: 300px; border: 1px solid #ccc;"
    :srcdoc="iframeContent"
  ></iframe>
</template>

<script setup>
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
</script>