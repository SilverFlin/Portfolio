<template>
    <div class="w-1/2 h-full mx-[25%] bg-inherit shrink-0 snap-center flex flex-col justify-center items-center">
        <div class="flex justify-center">
            <quotes-svg class="text-[#b8b2a7]" :width="35" :height="35"></quotes-svg>
        </div>
        <div class="flex text-[#625D52] justify-center w-1/2 my-6 text-center">
            {{ props.card.message }}
        </div>
        <div class="flex items-center justify-center">
            <div class="w-8 h-8 mr-3 bg-center bg-cover rounded-full"
                :style="{ backgroundImage: `url(/src/assets/images/${props.card.imageName})` }">
            </div>
            <p class=" font-bold text-[#423D33]">
                {{ card.name }} -
                <span class="font-normal text-[#625d52]">
                    {{ props.card.title }}, {{ props.card.company }}
                </span>
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { TestimonialCardProps } from "@/types";

import quotesSvg from "@/icons/QuotesSvg.vue";

interface Props {
    card: TestimonialCardProps;
}

const props = defineProps<Props>()
</script>