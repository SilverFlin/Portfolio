<template>
    <div class="h-screen min-h-screen">
        <div class="flex w-screen bg-fixed bg-center bg-cover h-2/3"
            :style="getBackgroundImage(`${projectsImagesDirPath}/${project?.imageName}`)">
            <div class="w-3/4 px-8 py-6 m-auto overflow-hidden bg-secondary-200">
                <h1 class="text-3xl font-bold uppercase">
                    {{ project?.title }}
                </h1>
                <span class="font-mono right-0 mt-2 inline-block text-base text-[#504A40] lowercase">
                    {{ project?.date.toLocaleString('default', { day: '2-digit', month: 'short', year: "numeric" }) ?? '' }}
                </span>
                <p class="mt-8 text-justify">
                    {{ project?.description }}
                </p>
            </div>

        </div>

        <div class="px-4 py-16 mb-8 lg:px-16 ">
            <component :is="project?.component" />
        </div>

        <div class="">
            <!-- TODO Tags and links -->
        </div>



    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import 'highlight.js/lib/common';
import { projectsImagesDirPath } from '@/constants/paths';
import { getBackgroundImage } from '@/includes/importImages';
import { getProjectById } from '@/content';
import { ref, shallowRef } from 'vue';
import type { Project } from '@/types';
import { setTailwindClassesOnMarkdown } from '@/includes/classLoader';

const route = useRoute();
const router = useRouter();
let project = ref()
getProjectById(route.params.id as string)
    .then((p: Project) => {
        p.component = shallowRef(p.component)
        project.value = p;
    })
    .then(() => {
        setTailwindClassesOnMarkdown(document)
    })
    .catch((_e) => {
        console.error("Project not found")
        router.push({ name: 'home' })
    })


</script>