<template>
    <div class="container flex flex-wrap justify-around max-w-screen-lg mx-auto mt-12 bg-red-600">
        <div class="w-64 p-4 mx-10 my-5 bg-indigo-600 h-80" v-for="(card, idx) in cards" :key="idx">
            {{ card }}
        </div>
    </div>
</template>


<script setup lang="ts">
const cards = ["Project Card 1", "Project Card 2", "Project Card 3", "Project Card 4", "Project Card 5"]



</script>