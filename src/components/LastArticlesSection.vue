<template>
    <div class="overflow-hidden flex flex-row justify-center px-32 items-center min-h-screen max-h-screen bg-red-300">
        <article-card v-for="card in articleCardsData.slice(0, 2)" :key="card.id" :card="card"></article-card>
        <div class="ml-32">
            <router-link :to="{ name: 'articles' }">
                <Icon width="4rem" icon="line-md:arrow-right" class="rounded-full hover:bg-blue-300 cursor-pointer" />
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import articleCardsData from '@/models/ArticleCards';
import ArticleCard from './ArticleCard.vue';
import { Icon } from '@iconify/vue';

console.log(articleCardsData)

</script>