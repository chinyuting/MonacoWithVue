<template>
  <div class="flex">
    <!-- <MonacoEditorWrapper/> -->
    <MonacoEditor :language="'html'"/>
    <MonacoEditor :language="'css'"/>
    <MonacoEditor :language="'javascript'"/>
  </div>
  <MonacoPreview/>
  <ConsolePreview/>
</template>

<script setup>
import { provide, ref } from 'vue';

import MonacoEditor from './components/MonacoEditor.vue'
import MonacoPreview from './components/MonacoPreview.vue';
import ConsolePreview from './components/ConsolePreview.vue';

// import MonacoEditorWrapper from './components/MonacoEditorWrapper.vue';

provide('code', {
  html: ref(''),
  css: ref(''),
  javascript: ref('')
})
</script>

<style>
.flex {
  display: flex;
}
</style>