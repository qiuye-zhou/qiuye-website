<script lang="ts" setup>
import { ref } from 'vue';
import { useMedia } from 'use-aid';

const isMedia = ref(useMedia());
</script>
<template>
    <div>
        <p class="mt-5">
            主修 JavaScript 相关的技术栈，前端后端都会写，按照顺序越往后熟悉度越低。
        </p>
        <p class="mt-5">
            Web：
        </p>
        <img
            class="mt-5"
            :src="`https://skillicons.dev/icons?i=html,css,js,ts,vue,sass,tailwind,vite,rollupjs,react&perline=${isMedia ? 5 : 10}`"
        >
        <p class="mt-5">
            Backend：
        </p>
        <img
            class="mt-5"
            :src="`https://skillicons.dev/icons?i=nestjs,nodejs,express,mysql,redis&perline=${isMedia ? 5 : 10}`"
        >
        <p class="mt-5">
            DevOps：
        </p>
        <img
            class="mt-5"
            :src="`https://skillicons.dev/icons?i=github,vscode,git,githubactions&perline=${isMedia ? 5 : 10}`"
        >
        <p class="mt-5">
            想学和目前只会一点基础想掌握的(可能吧)：
        </p>
        <img
            class="mt-5"
            :src="`https://skillicons.dev/icons?i=vite,rollupjs,react,redis,go&perline=${isMedia ? 5 : 10}`"
        >
    </div>
</template>
