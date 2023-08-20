<template>
    <div class="h-screen min-h-screen">
        <article-header v-if="project" :project="project"></article-header>


        <article class="px-4 py-2 dark:bg-[#002e63] prose dark:prose-invert lg:prose-2xl bg-[white] m-auto">
            <component :is="project?.component" />
        </article>

        <div class="">
            <!-- TODO Tags and links -->
        </div>

    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import 'highlight.js/lib/common';
import { getProjectById } from '@/content';
import { ref, shallowRef } from 'vue';
import type { Project } from '@/types';
import ArticleHeader from './ArticleHeader.vue';

const route = useRoute();
const router = useRouter();
let project = ref()
getProjectById(route.params.id as string)
    .then((p: Project) => {
        p.component = shallowRef(p.component)
        project.value = p;
    })
    .catch(() => {
        console.error("Project not found")
        router.push({ name: 'home' })
    })


</script>