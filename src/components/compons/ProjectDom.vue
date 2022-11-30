<script lang="ts" setup>
const props = defineProps<{
    title: string,
    description: string,
    icons: string[]
}>()
</script>
<template>
    <a
        :href="`https://github.com/qiuye-zhou/${props.title}`"
        target="_blank"
        class="hover:shadow-lg dark:hover:shadow-lg hover:-translate-y-0.5 transition-all"
    >
        <div
            class="shadow w-full h-full flex flex-col justify-center
            p-3 bg-gray-100 dark:bg-gray-700 rounded"
        >
            <h2 class="font-semibold flex items-center">
                {{ title }}
                <div className="ml-2 flex gap-2">
                    <img
                        v-for="item in props.icons"
                        :key="item"
                        class="w-5"
                        :src="`icons/${item}.svg`"
                    >
                </div>
            </h2>
            <p class="text-sm mt-1 text-gray-600 dark:text-slate-300">{{ props.description }}</p>
        </div>
    </a>
</template>
