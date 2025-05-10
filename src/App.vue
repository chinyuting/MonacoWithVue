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

const code = {
  html: ref(''),
  css: ref(''),
  javascript: ref('')
};

provide('code', code);

</script>

<style>
.flex {
  display: flex;
  gap: 5px;
}
</style>