<template>
    <div class="w-1/2 h-full mx-[25%] bg-[#0E7C86] shrink-0 snap-center flex flex-col justify-center items-center">
        <div class="flex justify-center">
            <quotes-svg :width="35" :height="35"></quotes-svg>
        </div>
        <div class="flex justify-center w-1/2 my-6 text-center">
            {{ card.message }}
        </div>
        <div class="flex justify-center">
            <div class="w-8 h-8 mr-3 bg-center bg-cover rounded-full"
                style="background-image: url(https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)">
            </div>


            {{ card.name }}
        </div>
    </div>
</template>
<script setup lang="ts">
import quotesSvg from "@/icons/QuotesSvg.vue";

const props = defineProps({
    card: {
        type: Object,
        required: true
    }
})
</script>