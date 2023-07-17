<template>
    <div @scroll="logPosition"
        class="flex w-full px-6 m-0 overflow-scroll scroll-px-6 remove-scrollbar h-72 snap-x snap-mandatory max-h-64 min-h-min bg-inherit">
        <testimonial-card v-for="card in testimonialCards" :key="card.id" :card="card"></testimonial-card>
    </div>
    <div class="flex justify-center w-1/3 h-auto mx-auto bg-inherit">
        <div v-for="card in testimonialCards" :key="card.id" class="inline mx-2">
            <template v-if="card.isActive">
                x
            </template>
            <template v-else>
                o
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import TestimonialCard from "@/components/TestimonialCard.vue";

const testimonialCards = ref([
    { id: 1, name: "John Doe", title: "CEO", company: "Company", message: "LoLorem ipsum dolor sit amet consectrem ipsum dolor sit amet consect", isActive: true },
    { id: 2, name: "John Doe", title: "CEO", company: "Company", message: "Lorem ipsum dolor sit amet consect", isActive: false },
    { id: 3, name: "John Doe", title: "CEO", company: "Company", message: "Lorem ipsum dolor sit amet consect", isActive: false },
    { id: 4, name: "John Doe", title: "CEO", company: "Company", message: "Lorem ipsum dolor sit amet consect", isActive: false },
    { id: 5, name: "John Doe", title: "CEO", company: "Company", message: "Lorem ipsum dolor sit amet consect", isActive: false },
    { id: 6, name: "John Doe", title: "CEO", company: "Company", message: "Lorem ipsum dolor sit amet consect", isActive: false },
])

function logPosition(evt: Event) {
    for (let card of testimonialCards.value) {
        card.isActive = false
    }

    const target = evt.target as Element
    const carouselProgress = Math.round(target.scrollLeft / target.scrollWidth * 100)

    const percentageOfCard = 100 / testimonialCards.value.length

    const cardIndex = Math.round(carouselProgress / percentageOfCard)
    testimonialCards.value[cardIndex].isActive = true
}
</script>

<style>
.remove-scrollbar::-webkit-scrollbar {
    display: none;
}

.remove-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>