<style src="../assets/sections/projects.css"></style>
<template>
  <section class="projects">
    <div
      class="row"
      ref="row"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
    >
      <Project
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :subtitle="project.subtitle"
        :langage="project.langage"
        :class="{ selected: index === selectedIndex }"
      />
    </div>
  </section>
</template>

<script setup>
import Project from "../components/Project.vue";

// TODO: Infinite caroussel
// TODO: projects fron I18N
const projects = [
  { title: "Cybersécurité", subtitle: "Projet de recherche", langage: "" },
  {
    title: "Commande Gestuelle",
    subtitle: "Projet de fin d'études",
    langage: "C++ / Qt",
  },
  { title: "KazaKlub", subtitle: "Projet de stage", langage: "Symfony" },
  {
    title: "Application Covoiturage",
    subtitle: "Projet de fin d'études",
    langage: "Vue.Js / Laravel",
  },
  {
    title: "Gestion de Stock",
    subtitle: "Projet de fin d'études",
    langage: "C# / .Net",
  },
  {
    title: "Optimisation Discrète",
    subtitle: "Projet de recherche",
    langage: "C++",
  },
  {
    title: "Qualité Logicielle",
    subtitle: "Projet de groupe",
    langage: "Java / Maven",
  },
  {
    title: "Simulation Hopital",
    subtitle: "Premier projet en autonomie",
    langage: "Java / NetBeans",
  },
  { title: "Projet Java", subtitle: "Projet tutoré", langage: "Java / Maven" },
];

// import { ref, onMounted, watch, computed } from 'vue';
// import { useI18n } from 'vue-i18n';
// const { t } = useI18n();

// let isDragging = ref(false);
// let startX = ref(0);
// let scrollLeft = ref(0);
// const row = ref(null);

// const projects = computed(() => {
//   try {
//     const projectsList = t('projects.list', { returnObjects: true });
//     console.log('List loaded:', projectsList.value);
//     return Array.isArray(projectsList) ? projectsList : [
//           { "title": "Cybersécurité", "subtitle": "Projet de recherche", "langage": "" }
//       ];
//   } catch (error) {
//     console.error('Error loading projects:', error);
//     return [];
//   }
// });

// const visibleProjects = computed(() => {
//   if (projects.value.length === 0) return [];
//   return [...projects.value, ...projects.value, ...projects.value];
// });

// const selectedIndex = ref(0);

// const startDrag = (e) => {
//   isDragging.value = true;
//   startX.value = e.pageX - row.value.offsetLeft;
//   scrollLeft.value = row.value.scrollLeft;
// };

// const onDrag = (e) => {
//   if (!isDragging.value) return;
//   e.preventDefault();
//   const x = e.pageX - row.value.offsetLeft;
//   const walk = (x - startX.value) * 2; // Adjust scroll speed
//   row.value.scrollLeft = scrollLeft.value - walk;
// };

// const stopDrag = () => {
//   if (!isDragging.value) return;
//   isDragging.value = false;
//   centerSelected();
// };

// const centerSelected = () => {
//   const children = Array.from(row.value.children);
//   const rowCenter = row.value.scrollLeft + row.value.offsetWidth / 2;
//   let closestChild = null;
//   let closestDistance = Infinity;

//   children.forEach((child, index) => {
//     const childCenter = child.offsetLeft + child.offsetWidth / 2;
//     const distance = Math.abs(rowCenter - childCenter);
//     if (distance < closestDistance) {
//       closestDistance = distance;
//       closestChild = child;
//       selectedIndex.value = index % projects.value.length; // Adjust for infinite scrolling
//     }
//   });

//   if (closestChild) {
//     const scrollTo = closestChild.offsetLeft - (row.value.offsetWidth - closestChild.offsetWidth) / 2;
//     row.value.scrollTo({ left: scrollTo, behavior: "smooth" });
//   }
// };

// const handleInfiniteScroll = () => {
//   const scrollWidth = row.value.scrollWidth / 3;
//   if (row.value.scrollLeft <= 0) {
//     row.value.scrollLeft += scrollWidth;
//   } else if (row.value.scrollLeft >= scrollWidth * 2) {
//     row.value.scrollLeft -= scrollWidth;
//   }
// };

// onMounted(() => {
//   row.value.addEventListener("scroll", handleInfiniteScroll);
// });

// watch(() => t('projects.list', { returnObjects: true }), (newProjects) => {
//   // No need to update projects and visibleProjects manually as they are now computed
// });
</script>
