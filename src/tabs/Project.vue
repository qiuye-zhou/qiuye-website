<script lang="ts" setup>
import ProjetcDom from '../components/compons/ProjectDom.vue';
</script>
<template>
    <div class="grid md:grid-flow-row md:grid-cols-2 md:space-y-0 gap-3 mt-2">
        <ProjetcDom
            :title="'use-aid'"
            :description="'Utility set for Vue3 only'"
            :icons="['org-utility', 'vue', 'typescript']"
        />
        <ProjetcDom
            :title="'qiuye-robot'"
            :description="'My QQ robot'"
            :icons="['robot', 'typescript']"
        />
        <ProjetcDom
            :title="'eslint-config-qiuye'"
            :description="'my eslint config.'"
            :icons="['eslint']"
        />
    </div>
</template>
