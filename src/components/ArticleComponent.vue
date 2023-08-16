<template>
    <div class="h-screen min-h-screen">
        <div class="flex w-screen bg-fixed bg-center bg-cover h-2/3"
            :style="getBackgroundImage(`${articlesImagesDirPath}/${article?.imageName}`)">
            <div class="w-3/4 px-8 py-6 m-auto overflow-hidden bg-secondary-300 ">
                <h1 class="text-3xl font-bold uppercase ">
                    {{ article!.title }}
                </h1>
                <span class="font-mono right-0 mt-2 inline-block text-base text-[#504A40] lowercase">
                    {{ article!.date.toLocaleString('default', { day: '2-digit', month: 'short', year: "numeric" }) }}
                </span>
            </div>
        </div>

        <div class="px-4 py-16 mb-8 lg:px-16 ">
            <component :is="article.component" />
        </div>

        <div class="">
            <!-- TODO Tags and links -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { getBackgroundImage } from '@/includes/importImages';
import 'highlight.js/lib/common';
import { articlesImagesDirPath } from '@/constants/paths';
import type { Article } from '@/types';
import { getArticleById } from '@/content';
import { ref, shallowRef } from 'vue';
import { setTailwindClassesOnMarkdown } from '@/includes/classLoader';

const route = useRoute();
const router = useRouter()

let article = ref();
getArticleById(route.params.id as string)
    .then((a: Article) => {
        a.component = shallowRef(a.component)
        article.value = a;
    })
    .then(() => {
        setTailwindClassesOnMarkdown(document)
    })
    .catch((_e) => {
        console.error("Article not found")
        router.push({ name: 'home' })
    })

</script>