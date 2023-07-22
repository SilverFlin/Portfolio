<template>
    <div class="h-screen min-h-screen">
        <div class="flex w-screen bg-fixed bg-center bg-cover h-2/3"
            :style="{ backgroundImage: `url(${projectsImagesDirPath}/${project!.imageName})` }">
            <div class="w-1/2 px-8 py-6 m-auto overflow-hidden bg-secondary-200 h-1/2">
                <h1 class="text-3xl font-bold uppercase">
                    {{ project!.name }}
                </h1>
                <span class="font-mono right-0 mt-2 inline-block text-base text-[#504A40] lowercase">
                    {{ project!.date.toLocaleString('default', { day: '2-digit', month: 'short', year: "numeric" }) }}
                </span>
                <p class="mt-8 text-justify">
                    {{ project!.description }}
                </p>
            </div>

        </div>
        <div class="w-2/3 px-32 py-16 mx-auto mb-8 ">

            <template v-if="project!.projectExperience">
                <h2 class="mt-8 text-3xl font-bold">Project Experience</h2>
                <p class="mt-3 text-justify">
                    {{ project!.projectExperience.text }}
                </p>
            </template>
            <template v-if="project!.projectIntention">
                <h2 class="mt-8 text-3xl font-bold">Project Intention</h2>
                <p class="mt-3 text-justify">
                    {{ project!.projectIntention.text }}
                </p>
            </template>
            <template v-if="project!.projectChallenges">
                <h2 class="mt-8 text-3xl font-bold">Challenges</h2>
                <p class="mt-3 text-justify">
                    {{ project!.projectChallenges.text }}
                </p>
            </template>
            <template v-if="project!.projectSolutions">
                <h2 class="mt-8 text-3xl font-bold">Solutions</h2>
                <p class="mt-3 text-justify">
                    {{ project!.projectSolutions.text }}
                </p>
            </template>
            <template v-if="project!.projectResults">
                <h2 class="mt-8 text-3xl font-bold">Results</h2>
                <p class="mt-3 text-justify">
                    {{ project!.projectResults.text }}
                </p>
            </template>
        </div>
        <div class="">
            <!-- TODO Tags and links -->

        </div>



    </div>
</template>

<script setup lang="ts">
import type { ArticleTitleContent, ArticleViewProps } from '@/types';
import { useRoute, useRouter } from 'vue-router';
import { getProjectById } from '@/models/Projects';
import type { ArticleTextContent, ArticleImageContent, ArticleCodeContent } from '@/types';
import 'highlight.js/lib/common';
import { projectsImagesDirPath } from '@/constants/paths';

const route = useRoute();
const router = useRouter();

const project = getProjectById(+route.params.id);

if (!project) {
    router.push({ name: 'home' });
}

</script>