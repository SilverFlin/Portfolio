<template>
    <section class="w-full h-full">
        <div style="background-image: url(https://images.unsplash.com/photo-1465153690352-10c1b29577f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80)"
            class="w-full bg-local bg-cover rounded-t-lg h-1/2"></div>
        <div class="p-3">
            <h1 class="relative text-2xl font-bold uppercase truncate">
                Title asdsa.
            </h1>
            <span class="right-0 text-base text-gray-300 lowercase">July 2023</span>
            <p class="line-clamp-2">
                overflow-hidden break-words velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt
                deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu
                dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est
                ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate
                sunt elit mollit officia ad enim sit consectetur enim.
            </p>

            <div class="flex justify-around mt-12">
                <span class="px-2 py-0 text-sm rounded-full bg-cyan-300">Java</span>
                <span class="px-2 py-0 text-sm rounded-full bg-cyan-300">JavaScript</span>
                <span class="px-2 py-0 text-sm rounded-full bg-cyan-300">3+</span>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">


const props = defineProps({ card: String })

</script>