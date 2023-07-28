<template>
    <nav class="fixed z-10 w-full top-3 bg-inherit">
        <ul class="justify-around hidden lg:flex px-80">
            <li v-for="route in routes" :key="route.name" class="">
                <router-link :to="{ name: route.name }"
                    class="font-bold uppercase text-secondary-500 hover:text-primary-400" active-class="text-primary-500">
                    {{ route.name }}
                </router-link>
            </li>
        </ul>

        <div class="flex w-full px-8 lg:hidden">
            <button @click="toggleDropDown" class=" text-secondary-800" :class="{ 'bg-secondary-300': showDropDown }">
                <Icon width="32" height="32" icon="ci:hamburger-lg" />
            </button>

        </div>
        <transition name="dropdown">
            <ul class="mx-8 bg-secondary-300 lg:hidden " v-if="showDropDown">
                <li v-for="route in routes" :key="route.name" @click="toggleDropDown" class="px-4">
                    <router-link :to="{ name: route.name }"
                        class="block w-full h-full px-4 py-2 font-bold uppercase text-secondary-500 hover:text-primary-400"
                        active-class="text-primary-600">
                        {{ route.name }}
                    </router-link>
                    <template v-if="routes.indexOf(route) !== routes.length - 1">
                        <hr class="text-secondary-500">
                    </template>
                </li>
            </ul>
        </transition>


    </nav>
</template>

<script setup lang="ts">
import router from "@/router";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const navBarRoutes = ['home', 'about me', 'projects', 'articles']

const showDropDown = ref(false)

function toggleDropDown() {
    showDropDown.value = !showDropDown.value
}


const routes = router.getRoutes().filter((route) => navBarRoutes.includes(route.name?.toString() ?? ''));
</script>

<style>
.dropdown-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.3s ease;
}

.dropdown-enter,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>