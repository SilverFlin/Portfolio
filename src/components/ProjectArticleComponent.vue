<template>
    <div class="h-screen min-h-screen">
        <div class="flex w-screen bg-fixed bg-center bg-cover h-2/3"
            :style="{ backgroundImage: `url(${project!.imageName})` }">
            <div class="w-1/2 px-8 py-6 m-auto overflow-hidden bg-[#B8B2A7] h-1/2">
                <h1 class="text-3xl font-bold uppercase">
                    {{ project!.name }}
                </h1>
                <span class="right-0 mt-2 inline-block text-base text-[#504A40] lowercase">
                    {{ project!.date.toLocaleString('default', { day: '2-digit', month: 'short', year: "numeric" }) }}
                </span>
            </div>

        </div>
        <div class="px-32 my-8">



        </div>
        <div>
            sad
        </div>



    </div>
</template>

<script setup lang="ts">
import type { ArticleTitleContent, ArticleViewProps } from '@/types';
import { useRoute, useRouter } from 'vue-router';
import { getProjectById } from '@/models/Projects';
import type { ArticleTextContent, ArticleImageContent, ArticleCodeContent } from '@/types';
import 'highlight.js/lib/common';

const route = useRoute();
const router = useRouter();

const project = getProjectById(+route.params.id);

if (!project) {
    router.push({ name: 'home' });
}

</script>