<template>
    <div class="max-h-screen min-h-screen overflow-hidden bg-primary-200">
        <h1 class="my-16 text-5xl font-bold text-center uppercase lg:ml-12 text-secondary-900">
            Last Articles
        </h1>
        <div class="flex flex-row items-center justify-center h-2/3">

            <article-card v-for="card in articleCardsData" :key="card.id" :card="card"></article-card>
            <div class="lg:ml-24">
                <router-link :to="{ name: 'articles' }">
                    <Icon width="4rem" icon="line-md:arrow-right"
                        class="rounded-full cursor-pointer hover:text-secondary-600" />
                </router-link>
            </div>
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