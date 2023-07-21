<template>
    <div class="flex flex-row items-center justify-center max-h-screen min-h-screen px-32 overflow-hidden bg-red-300">
        <article-card v-for="card in articleCardsData" :key="card.id" :card="card"></article-card>
        <div class="ml-32">
            <router-link :to="{ name: 'articles' }">
                <Icon width="4rem" icon="line-md:arrow-right" class="rounded-full cursor-pointer hover:bg-blue-300" />
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getArticlesCards } from '@/models/Articles';
import ArticleCard from './ArticleCard.vue';
import { Icon } from '@iconify/vue';

const limitCards = 2;
const articleCardsData = getArticlesCards().slice(0, limitCards);

</script>