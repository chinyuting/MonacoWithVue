<template>
  <div class="flex">
    <Editor :language="'html'"/>
    <Editor :language="'css'"/>
    <Editor :language="'javascript'"/>
  </div>
  <MonacoPreview/>
  <ConsolePreview/>
</template>

<script setup>
import { provide, ref } from 'vue';

import Editor from './components/Editor.vue'
import MonacoPreview from './components/MonacoPreview.vue';
import ConsolePreview from './components/ConsolePreview.vue';

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