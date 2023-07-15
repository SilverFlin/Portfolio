<template>
    <div
        class="container flex flex-wrap justify-around max-w-screen-lg p-5 mx-auto mt-12 mb-12 bg-red-600 min-h-min max-h-max">
        <transition-group name="card">
            <div class="w-60 p-0 mx-6 my-5 bg-indigo-600 rounded-lg hover:scale-110 h-[25rem] hover:rotate-2 hover:cursor-pointer"
                v-for="(card, idx) in cards" :key="idx">
                <project-card :card="card"></project-card>
            </div>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';

const cards: Ref<string[]> = ref([])


function displayCards(): void {
    // add 5 cards with a delay of 1s each
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            cards.value.push(`Card ${i + 1}`);
        }, i * 800);
    }
}
displayCards();


</script>

<style>
.card-move,
.card-enter-active,
.card-leave-active {
    transition: opacity 0.8s ease;
}

.card-enter-from,
.card-leave-to {
    opacity: 0;
}

.card-leave-active {
    position: absolute;
}
</style>