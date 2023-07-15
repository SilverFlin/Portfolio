<template>
    <div class="w-1/2 h-full mx-[25%] bg-red-300 shrink-0 snap-center">
        {{ card.name }}
        {{ card.title }}
        {{ card.company }}
        {{ card.message }}
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    card: {
        type: Object,
        required: true
    }
})






</script>