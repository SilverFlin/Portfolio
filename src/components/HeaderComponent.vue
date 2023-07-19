<template>
    <nav class="fixed z-10 top-3 w-full px-96">
        <ul class="flex justify-around">
            <li v-for="route in routes" :key="route.name">
                <router-link :to="{ name: route.name }" class="uppercase text-[#A39E93] font-bold" active-class="active">
                    {{ route.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import router from "@/router";

const routes = router.getRoutes();

console.log(routes)


</script>

<style>
.active {
    color: #27241D;
}
</style>