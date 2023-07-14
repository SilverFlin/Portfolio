<template>
    <ul>
        <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
        </li>

        <!-- <li>
            <router-link :to="{ name: 'about-me' }">About Me</router-link>
        </li> -->

        <li>
            <router-link :to="{ name: 'projects' }">Projects</router-link>
        </li>

        <!-- <li>
            <router-link :to="{ name: 'articles' }">Articles</router-link>
        </li> -->
    </ul>
</template>

<script setup lang="ts"></script>