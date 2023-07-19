<template>
  <main
    class="scroll-smooth snap-mandatory snap-y remove-scroll h-screen h-min-screen h-max-screen remove-scrollbar overflow-scroll">
    <introduction-section class="snap-center"></introduction-section>
    <testimonial-carousel class="snap-center"></testimonial-carousel>
  </main>
</template>

<script setup lang="ts">
import TestimonialCarousel from "@/components/TestimonialCarousel.vue";
import IntroductionSection from "@/components/IntroductionSection.vue";
</script>
 