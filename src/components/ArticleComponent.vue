<template>
    <div class="h-screen min-h-screen">
        <div class="flex w-screen bg-fixed bg-center bg-cover h-2/3"
            :style="{ backgroundImage: `url(${article!.coverImageURL})` }">
            <div class="w-1/2 px-8 py-6 m-auto overflow-hidden bg-[#B8B2A7] h-1/2">
                <h1 class="text-3xl font-bold uppercase">
                    {{ article!.title }}
                </h1>
                <span class="right-0 mt-2 inline-block text-base text-[#504A40] lowercase">
                    {{ article!.date.toLocaleString('default', { day: '2-digit', month: 'short', year: "numeric" }) }}
                </span>
            </div>

        </div>
        <div class="px-32 my-8">
            <template v-for="(content, idx) in article!.content" :key="idx">
                <template v-if="content.type === 'text'">
                    <p class="mt-8 text-justify">
                        {{ (content as ArticleTextContent).text }}
                    </p>
                </template>
                <template v-else-if="content.type === 'image'">
                    <img :src="(content as ArticleImageContent).url" alt="" class="w-1/3 mx-auto mt-8">
                </template>
                <template v-else-if="content.type === 'code'">
                    <highlightjs autodetect :code="(content as ArticleCodeContent).code" class="mt-8" />
                </template>
                <template v-else-if="content.type === 'title'">
                    <h2 class="mt-16 text-3xl font-bold">
                        {{ (content as ArticleTitleContent).title }}
                    </h2>
                </template>

            </template>


        </div>
        <div>
            sad
        </div>



    </div>
</template>

<script setup lang="ts">
import type { ArticleTitleContent, ArticleViewProps } from '@/types';
import { useRoute, useRouter } from 'vue-router';
import { getArticleById } from '@/models/Articles';
import type { ArticleTextContent, ArticleImageContent, ArticleCodeContent } from '@/types';
import 'highlight.js/lib/common';

const route = useRoute();
const router = useRouter();

const article: ArticleViewProps | undefined = getArticleById(+route.params.id);

if (!article) {
    router.push({ name: 'home' });
}

</script>