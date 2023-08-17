<template>
    <div class="flex flex-col justify-center max-h-screen min-h-screen overflow-hidden bg-secondary-100">
        <h1 class="my-auto text-5xl font-bold text-center uppercase h-1/3 text-primary-700">
            Last Projects
        </h1>
        <div class="flex flex-row items-center justify-center h-2/3">
            <project-card v-for="card in projectCardsData" :key="card.id" :card="card"></project-card>
            <div class="lg:ml-24">
                <router-link :to="{ name: 'projects' }">
                    <Icon width="4rem" icon="line-md:arrow-right"
                        class="rounded-full cursor-pointer hover:text-primary-300" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import { Icon } from '@iconify/vue';
import type { Project } from '@/types';
import { getAllProjects } from '@/content';
import { ref } from 'vue';

const limitCards = 2;

let projectCardsData = ref([] as Project[]);
getAllProjects()
    .then((projects) => {
        projectCardsData.value = projects.slice(0, limitCards);
    })

</script>