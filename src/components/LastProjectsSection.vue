<template>
    <div class="overflow-hidden flex flex-row justify-center px-32 items-center min-h-screen max-h-screen bg-red-300">
        <project-card v-for="card in projectCardsData.slice(0, 2)" :key="card.id" :card="card"></project-card>
        <div class="ml-32">
            <Icon width="4rem" icon="line-md:arrow-right" class="rounded-full hover:bg-blue-300 cursor-pointer" />
        </div>
    </div>
</template>

<script setup lang="ts">
import projectCardsData from '@/models/ProjectCards';
import ProjectCard from './ProjectCard.vue';
import { Icon } from '@iconify/vue';

</script>