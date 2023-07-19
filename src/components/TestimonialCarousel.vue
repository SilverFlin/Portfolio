<template>
    <div class="flex flex-col min-h-screen max-h-screen overflow-hidden justify-center">
        <div @scroll="moveCarousel"
            class="flex w-full px-6 m-0 overflow-scroll scroll-px-6 remove-scrollbar h-2/3 snap-x snap-mandatory max-h-2/3 min-h-2/3  bg-inherit">
            <testimonial-card v-for="card in testimonialCards" :key="card.id" :card="card"></testimonial-card>
        </div>
        <div class="flex justify-center w-1/3 h-auto mx-auto mt-3 bg-inherit">
            <div v-for="card in testimonialCards" :key="card.id" class="inline mx-2">
                <template v-if="card.isActive">
                    <Icon :width="30" class="text-[#504A40]" icon="line-md:circle-twotone" />
                </template>
                <template v-else>
                    <Icon :width="30" class="text-[#504A40]" icon="fluent:circle-12-regular" />
                </template>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Ref } from "vue"
import type { TestimonialCardProps } from '@/types'

import { ref } from "vue";
import TestimonialCard from "@/components/TestimonialCard.vue";
import { Icon } from "@iconify/vue"
import testimonialCardsData from "@/models/TestimonialCards"

const testimonialCards: Ref<TestimonialCardProps[]> = ref(testimonialCardsData)


function moveCarousel(evt: Event) {
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

<style></style>