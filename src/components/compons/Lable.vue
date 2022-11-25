<script lang="ts" setup>
const properties = defineProps<{
    url: string,
    icon: string,
}>()
</script>
<template>
    <a
        :href="properties.url"
        target="_blank"
        class="py-2 px-4 rounded-lg
        bg-gray-200 dark:bg-gray-300
        text-gray-500 dark:text-gray-300
        hover:bg-blue-400 hover:text-gray-100
        flex items-center transition-all mt-2 mr-2"
    >
        <img
            class="w-4 mr-2"
            :src="`icons/${icon}.svg`"
        >
        <slot />
    </a>
</template>
