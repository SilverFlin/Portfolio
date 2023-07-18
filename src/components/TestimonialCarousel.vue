<template>
    <div @scroll="logPosition"
        class="flex w-full px-6 m-0 overflow-scroll scroll-px-6 remove-scrollbar h-72 snap-x snap-mandatory max-h-64 min-h-min bg-inherit">
        <testimonial-card v-for="card in testimonialCards" :key="card.id" :card="card"></testimonial-card>
    </div>
    <div class="flex justify-center w-1/3 h-auto mx-auto bg-inherit">
        <div v-for="card in testimonialCards" :key="card.id" class="inline mx-2">
            <template v-if="card.isActive">
                <Icon :width="30" class="text-[#504A40]" icon="ph:dot-duotone" />
            </template>
            <template v-else>
                <Icon :width="30" class="text-[#504A40]" icon="ph:dot" />
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import TestimonialCard from "@/components/TestimonialCard.vue";
import { Icon } from "@iconify/vue"

const testimonialCards = ref([
    { id: 1, name: "Omar Palau", title: "Technical Writer", company: "Wizeline", message: "I know Luis since his bachelor's and early professional career. He's critical, self-driven, and motivated. He excels in full-stack engineering and quickly adapts to new technologies. I look forward to working with him in future projects.", imgName: "omar-palau.jpeg", isActive: true },
    { id: 2, name: "Zachary Plotkin", title: "Founder / CEO", company: "River Project", message: "Lorem ipsum dolor sit amet consect", imgName: "zachary-plotkin.png", isActive: false },
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