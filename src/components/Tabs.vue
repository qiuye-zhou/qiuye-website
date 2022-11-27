<script lang="ts" setup>// @ts-nocheck
import Home from '../tabs/Home.vue';
import Stack from '../tabs/Stack.vue';
import Project from '../tabs/Project.vue';
import { ref } from 'vue';
const tablist = {
    Home,
    Stack,
    Project
};
const TabList = [
    {
        name: '简介',
        path: 'Home'
    },
    {
        name: '技术栈',
        path: 'Stack'
    },
    {
        name: '项目',
        path: 'Project'
    }
];

const currentTab = ref('Home');
const change = value => {
    currentTab.value = value;
};
</script>
<template>
    <div class="px-8 py-4">
        <div class="py-4 px-2 text-lg flex justify-around shadow mb-5 rounded-2xl">
            <span
                v-for="item in TabList"
                :key="item.path"
                :class="item.path === currentTab ?
                    'text-xl md:text-2xl text-blue-500 dark:text-blue-300'
                    + 'cursor-pointer font-semibold select-none' : ''
                        + 'hover:text-blue-400 dark:hover:text-blue-400 transition-colors'
                        + 'text-xl md:text-2xl cursor-pointer select-none'"
                @click="change(item.path)"
            >{{ item.name }}</span>
        </div>
        <component
            :is="tablist[currentTab]"
        />
    </div>
</template>
