<template>
    <div class="h-screen min-h-screen">
        <div class="flex w-screen bg-fixed bg-red-200 bg-center bg-cover h-2/3"
            :style="{ backgroundImage: `url(${article!.coverImageURL})` }">
            <div class="w-1/2 m-auto overflow-hidden bg-gray-800 h-1/2">
                <h1 class="text-5xl font-bold uppercase">
                    {{ article!.title }}
                </h1>
                <span class="right-0 text-base text-[#E8E6E1] lowercase">
                    {{ article!.date.toLocaleString('default', { day: '2-digit', month: 'short', year: "numeric" }) }}
                </span>
                <p class="truncate">
                    {{ article!.description }}
                </p>
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
                    <highlightjs autodetect code="console.log('Hello World');" class="mt-8" />
                </template>

            </template>


        </div>
        <div>
            sad
        </div>



    </div>
</template>

<script setup lang="ts">
import type { ArticleViewProps } from '@/types';
import { useRoute, useRouter } from 'vue-router';
import articles from '@/models/Articles';
import type { ArticleTextContent, ArticleImageContent, ArticleCodeContent } from '@/types';
import 'highlight.js/lib/common';

const route = useRoute();
const router = useRouter();

const article = articles.find((a: ArticleViewProps) => {
    return a.id === +route.params.id
});

if (!article) {
    router.push({ name: 'home' });
}

</script>