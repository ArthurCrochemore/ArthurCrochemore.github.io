<style src="../assets/sections/projects.css"></style>
<style></style>
<template>
  <section class="projects component">
    <div class="carousel-container">
      <Carousel
        :items-to-show="itemsToShow"
        :wrap-around="true"
        :mouse-drag="true"
        :snap-align="'center'"
        :autoplay="3000"
        :pause-autoplay-on-hover="true"
        class="carousel"
      >
        <Slide v-for="(project, index) in projects" :key="index">
          <Project
            :title="project.title"
            :subtitle="project.subtitle"
            :langage="project.langage"
            :url="project.url"
            @open-modal="() => $emit('open-modal', project)"
          />
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import Project from "../components/Project.vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import { computed, toRaw } from "vue";
import { useI18n } from "vue-i18n";
const { tm } = useI18n();

const projects = computed(() => {
  const arr = tm("projects.list");
  return Array.isArray(arr) ? toRaw(arr) : [];
});

import { ref, onMounted, onUnmounted } from "vue";
const windowWidth = ref(window.innerWidth);

function handleResize() {
  windowWidth.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const itemsToShow = computed(() => {
  if (windowWidth.value <= 767) return 1;
  if (windowWidth.value <= 1079) return 1.4;
  return 2.5;
});
</script>
