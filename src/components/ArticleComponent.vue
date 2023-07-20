<template>
    <div>
        {{ article }}
    </div>
</template>

<script setup lang="ts">
import type { ArticleViewProps } from '@/types';
import { useRoute, useRouter } from 'vue-router';
import articles from '@/models/Articles';

const route = useRoute();
const router = useRouter();

const article = articles.find((a: ArticleViewProps) => {
    return a.id === +route.params.id
});

if (!article) {
    router.push({ name: 'home' });
}

</script>