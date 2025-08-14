<style src="../assets/sections/projects.css"></style>
<style></style>
<template>
  <section class="projects">
    <div class="carousel-container">
      <Carousel
        :items-to-show="2.5"
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
</script>
