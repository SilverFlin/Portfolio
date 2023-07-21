import type { ArticleCodeContent, ArticleImageContent, ArticleTextContent, ArticleTitleContent, ArticleViewProps } from "@/types";
import { JavaScriptTechnologyLabel } from "./TechnologyLabels";

const articles: ArticleViewProps[] = [
    {
        id: 1,
        title: 'Getting Started with TypeScript in Vue.js: A Powerful Combination for Modern Web Development',
        coverImageURL: 'https://yourwebsite.com/images/vue-typescript-banner.jpg',
        description: 'In this article, we\'ll explore how to harness the power of TypeScript in Vue.js, combining the benefits of a typed language with the flexibility of a progressive JavaScript framework...',
        content: [
            {
                type: 'image',
                url: 'https://yourwebsite.com/images/vue-typescript-image1.jpg',
                description: 'Vue.js with TypeScript',
            } as ArticleImageContent,
            {
                type: 'text',
                text: 'Vue.js is a popular JavaScript framework known for its simplicity and ease of integration into web projects. TypeScript, on the other hand, is a typed superset of JavaScript that brings static type checking and other powerful features to the language. Combining Vue.js with TypeScript provides a robust development environment, catching errors early, and improving the overall code quality.',
            } as ArticleTextContent,
            {
                type: 'code',
                code: `
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  private greeting: string = 'Hello, TypeScript with Vue.js!';
}
      `,
                language: 'typescript',
            } as ArticleCodeContent,
            {
                type: 'title',
                title: 'Utilizing Type Declarations',
            } as ArticleTitleContent,
            {
                type: 'text',
                text: 'One of the key benefits of TypeScript is its ability to provide type safety. You can utilize TypeScript interfaces and types to define the structure of your data and props.',
            } as ArticleTextContent,
            {
                type: 'code',
                code: `
interface User {
  id: number;
  name: string;
  email: string;
}

@Component
export default class UserProfile extends Vue {
  private user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  };
}
      `,
                language: 'typescript',
            } as ArticleCodeContent,
            {
                type: 'title',
                title: 'Leveraging TypeScript in Vue Single-File Components (SFCs)',
            } as ArticleTitleContent,
            {
                type: 'text',
                text: 'TypeScript can also be used within Vue Single-File Components. By default, Vue CLI sets up TypeScript support in the `<script>` block of SFCs.',
            } as ArticleTextContent,
            {
                type: 'code',
                code: `
<template>
  <!-- Your template code here -->
</template>

<script lang="ts">
// Your TypeScript code here
</script>

<style>
  /* Your styles here */
</style>
      `,
                language: 'html',
            } as ArticleCodeContent,
            {
                type: 'title',
                title: 'Enhancing Vue Store with TypeScript',
            } as ArticleTitleContent,
            {
                type: 'text',
                text: 'When using Vuex, Vue\'s state management library, TypeScript can bring significant advantages by defining strong types for the store state, mutations, actions, and getters.',
            } as ArticleTextContent,
            {
                type: 'code',
                code: `
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

interface RootState {
  // Define your state properties here
}

@Module({ namespaced: true })
export default class MyModule extends VuexModule<RootState> {
  // Define your state
  private myState: string = '';

  // Define mutations and actions here
}
      `,
                language: 'typescript',
            } as ArticleCodeContent,
            {
                type: 'text',
                text: 'In conclusion, integrating TypeScript with Vue.js opens up a world of possibilities for modern web development. From improved code quality to enhanced tooling support, the combination of Vue.js and TypeScript provides a seamless experience for developers and makes collaboration within teams more efficient.',
            } as ArticleTextContent,
            {
                type: 'image',
                url: 'https://yourwebsite.com/images/vue-typescript-conclusion.jpg',
                description: 'Vue.js with TypeScript',
            } as ArticleImageContent,
        ],
        date: new Date(),
        tags: [JavaScriptTechnologyLabel],
    }
]


export default articles;