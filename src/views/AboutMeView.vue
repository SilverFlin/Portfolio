<template>
    <div class="flex flex-row w-screen h-screen max-h-screen min-h-screen overflow-hidden bg-red-300">
        <div class="flex flex-col justify-around w-1/6 h-full py-8 bg-green-300">
            <div @click="clickWhoAmI"
                :class="{ 'w-5/6': isWhoAmIRendered, 'w-3/6': !isWhoAmIRendered, 'hover:w-4/6': !isWhoAmIRendered }"
                class="h-12 py-3 pr-3 rounded-r-lg cursor-pointer bg-primary-200 text-end">
                Who am I
            </div>
            <div @click="clickEducation"
                :class="{ 'w-5/6': isEducationRendered, 'w-3/6': !isEducationRendered, 'hover:w-4/6': !isEducationRendered }"
                class="h-12 py-3 pr-3 rounded-r-lg cursor-pointer bg-primary-200 text-end">
                Education
            </div>
            <div @click="clickExperience"
                :class="{ 'w-5/6': isExperienceRendered, 'w-3/6': !isExperienceRendered, 'hover:w-4/6': !isExperienceRendered }"
                class="h-12 py-3 pr-3 rounded-r-lg cursor-pointer bg-primary-200 text-end">
                Experience
            </div>
        </div>
        <div class="flex flex-col items-center justify-around w-4/6 h-full bg-blue-300">
            <div style="background-image: url('/assets/images/luistoledo.png');"
                class="absolute w-32 h-32 mt-5 bg-center bg-cover rounded-full top-10">
            </div>
            <div class="absolute top-48">
                <h2 @click="downloadResume"
                    class="text-xl font-bold text-center underline uppercase cursor-pointer hover:text-2xl">
                    Download My Resume
                </h2>
            </div>



            <component :is="innerViews[currentViewIndex]" class="mt-52 shrink-0 min-h-[30%] max-h-[30%]">
            </component>

            <div class="flex justify-around w-full">
                <a target="_blank" href="https://www.linkedin.com/in/luis-angel-toledo-russo-19093822a/"
                    class="w-10 h-10 p-2 bg-red-200 rounded-full cursor-pointer">
                    <Icon width="35" icon="line-md:linkedin" />
                </a>
                <a target="_blank" href="https://github.com/SilverFlin"
                    class="w-10 h-10 p-2 bg-red-200 rounded-full cursor-pointer">
                    <Icon width="35" icon="line-md:github-loop" />
                </a>
                <a href="mailto:toledorusso@outlook.com" class="w-10 h-10 p-2 bg-red-200 rounded-full cursor-pointer">
                    <Icon width="35" icon="line-md:email" />
                </a>
            </div>
        </div>
        <div class="flex flex-col items-end justify-around w-1/6 h-full py-8 bg-green-300">
            <div @click="clickCertificates"
                :class="{ 'w-5/6': isCertificatesRendered, 'w-3/6': !isCertificatesRendered, 'hover:w-4/6': !isCertificatesRendered }"
                class="h-12 py-3 pl-3 rounded-l-lg cursor-pointer bg-secondary-200">
                Certificates
            </div>
            <div @click="clickSkills"
                :class="{ 'w-5/6': isSkillsRendered, 'w-3/6': !isSkillsRendered, 'hover:w-4/6': !isSkillsRendered }"
                class="h-12 py-3 pl-3 rounded-l-lg cursor-pointer bg-secondary-200">
                Skills
            </div>
            <div @click="clickHobbies"
                :class="{ 'w-5/6': isHobbiesRendered, 'w-3/6': !isHobbiesRendered, 'hover:w-4/6': !isHobbiesRendered }"
                class="h-12 py-3 pl-3 rounded-l-lg cursor-pointer bg-secondary-200">
                Hobbies
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import WhoAmIComponent from '@/components/AboutMe/WhoAmIComponent.vue';
import EducationComponent from '@/components/AboutMe/EducationComponent.vue';
import ExperienceComponent from '@/components/AboutMe/ExperienceComponent.vue';
import CertificatesComponent from '@/components/AboutMe/CertificatesComponent.vue';
import SkillsComponent from '@/components/AboutMe/SkillsComponent.vue';
import HobbiesComponent from '@/components/AboutMe/HobbiesComponent.vue';

import { Icon } from '@iconify/vue';

import { ref } from 'vue'

const innerViews = [
    WhoAmIComponent,
    EducationComponent,
    ExperienceComponent,
    CertificatesComponent,
    SkillsComponent,
    HobbiesComponent
]
const currentViewIndex = ref(0)

const isWhoAmIRendered = ref(true)
const isEducationRendered = ref(false)
const isExperienceRendered = ref(false)
const isCertificatesRendered = ref(false)
const isSkillsRendered = ref(false)
const isHobbiesRendered = ref(false)

const clickWhoAmI = () => {
    clearAllRendered();
    currentViewIndex.value = innerViews.indexOf(WhoAmIComponent);
    isWhoAmIRendered.value = true;
}

const clickEducation = () => {
    clearAllRendered();
    currentViewIndex.value = innerViews.indexOf(EducationComponent);
    isEducationRendered.value = true;
}

const clickExperience = () => {
    clearAllRendered();
    currentViewIndex.value = innerViews.indexOf(ExperienceComponent);
    isExperienceRendered.value = true;
}

const clickCertificates = () => {
    clearAllRendered();
    currentViewIndex.value = innerViews.indexOf(CertificatesComponent);
    isCertificatesRendered.value = true;
}

const clickSkills = () => {
    clearAllRendered();
    currentViewIndex.value = innerViews.indexOf(SkillsComponent);
    isSkillsRendered.value = true;
}

const clickHobbies = () => {
    clearAllRendered();
    currentViewIndex.value = innerViews.indexOf(HobbiesComponent);
    isHobbiesRendered.value = true;
}

const clearAllRendered = () => {
    isWhoAmIRendered.value = false;
    isSkillsRendered.value = false;
    isCertificatesRendered.value = false;
    isExperienceRendered.value = false;
    isEducationRendered.value = false;
    isHobbiesRendered.value = false;
}

function downloadResume() {
    window.open('/src/assets/files/Luis_Toledo_Resume.pdf', '_blank');
}

</script>