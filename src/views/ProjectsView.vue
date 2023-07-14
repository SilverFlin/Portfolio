<template>
    <div
        class="container flex flex-wrap justify-around max-w-screen-lg min-h-screen p-5 mx-auto mt-12 mb-12 bg-red-600 max-h-max">
        <transition-group name="card">
            <div class="w-56 p-4 mx-6 my-5 bg-indigo-600 h-80" v-for="(card, idx) in cards" :key="idx">
                <p>
                    {{ card }}
                </p>
            </div>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

const cards: Ref<string[]> = ref([])


function displayCards(): void {
    // add 5 cards with a delay of 1s each
    for (let i = 0; i < 10; i++) {
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
    transition: all 0.8s ease;
}

.card-enter-from,
.card-leave-to {
    opacity: 0;
}

.card-leave-active {
    position: absolute;
}
</style>