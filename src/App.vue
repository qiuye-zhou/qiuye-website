<script setup lang="ts">
import Side from './components/Side.vue';
import Tabs from './components/Tabs.vue';
</script>

<template>
    <div class="max-w-screen-lg m-auto p-4 flex py-4 md:py-12 flex-col md:flex-row h-screen">
        <div class="w-full md:w-1/3">
            <Side />
        </div>
        <div class="w-full md:w-2/3">
            <Tabs />
        </div>
    </div>
</template>

<style scoped>
</style>
