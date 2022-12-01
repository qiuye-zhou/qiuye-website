<script setup lang="ts">
import Lable from './compons/Lable.vue';
</script>

<template>
    <div class="flex flex-col p-4 items-center">
        <img
            class="rounded-full"
            style="width: 200px"
            src="../../public/images/qiuye.png"
        >
        <h1 class="text-3xl font-medium !leading-relaxed mt-5">
            大家好! 我是
            <span class="bg-gray-200 dark:bg-gray-300 px-2 rounded-lg transition-all">
                qiuye
            </span>
        </h1>
        <h2 class="px-2 rounded-lg transition-all mt-2">
            如果你热爱生活就不要浪费时间，因为时间组成了生活。
        </h2>
        <div class="mt-4 grid grid-cols-2 grid-flow-row">
            <Lable
                :url="'https://github.com/qiuye-zhou'"
                :icon="'github'"
            >
                Github
            </Lable>
            <Lable
                :url="'https://leetcode.cn/u/qiu-xie-4ds/'"
                :icon="'leetcode'"
            >
                LeetCode
            </Lable>
            <Lable
                :url="'https://www.yuque.com/qiuye-nfnq0'"
                :icon="'语雀'"
            >
                Blog
            </Lable>
            <Lable
                :url="'https://qiuye.space'"
                :icon="'NoteBook'"
            >
                NoteBook
            </Lable>
            <Lable
                :url="'https://todolist.qiuye.space'"
                :icon="'时间'"
            >
                Todolist
            </Lable>
        </div>
    </div>
</template>

<style scoped>
</style>
