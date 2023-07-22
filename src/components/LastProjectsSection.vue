<template>
    <div class="flex flex-row items-center justify-center max-h-screen min-h-screen px-32 overflow-hidden bg-secondary-100">
        <project-card v-for="card in projectCardsData" :key="card.id" :card="card"></project-card>
        <div class="ml-32">
            <router-link :to="{ name: 'projects' }">
                <Icon width="4rem" icon="line-md:arrow-right" class="rounded-full cursor-pointer hover:text-primary-300" />
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import { Icon } from '@iconify/vue';
import { getProjectCards } from '@/models/Projects';

const limitCards = 2;
const projectCardsData = getProjectCards().slice(0, limitCards);

</script>