<template>
    <div class="h-screen min-h-screen">

        <article-header v-if="article" :article="article"></article-header>

        <article class="px-4 prose dark:prose-invert lg:prose-2xl bg-[white] m-auto">
            <component :is="article?.component" />
        </article>

        <div class="">
            <!-- TODO Tags and links -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import 'highlight.js/lib/common';
import type { Article } from '@/types';
import { getArticleById } from '@/content';
import { ref, shallowRef } from 'vue';
import ArticleHeader from './ArticleHeader.vue';

const route = useRoute();
const router = useRouter()

let article = ref();
getArticleById(route.params.id as string)
    .then((a: Article) => {
        a.component = shallowRef(a.component)
        article.value = a;
    })
    .catch(() => {
        console.error("Article not found")
        router.push({ name: 'home' })
    })

</script>