<template>
  <Modal
    v-if="showModal"
    :project="selectedProject"
    :experience="selectedExperience"
    @close="closeModal"
  />
  <div id="sections">
    <HeaderSection />
    <Home />
    <Description />
    <Experiences @open-modal="openExperienceModal" />
    <Skills />
    <Projects @open-modal="openProjectModal" />
    <FooterSection />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "./sections/Modal.vue";
import HeaderSection from "./sections/HeaderSection.vue";
import Home from "./sections/Home.vue";
import Description from "./sections/Description.vue";
import Experiences from "./sections/Experiences.vue";
import Skills from "./sections/Skills.vue";
import Projects from "./sections/Projects.vue";
import FooterSection from "./sections/FooterSection.vue";

const showModal = ref(false);
const selectedProject = ref(null);
const selectedExperience = ref(null);

function openExperienceModal(experience) {
  selectedExperience.value = experience;
  selectedProject.value = null;
  showModal.value = true;
}

function openProjectModal(project) {
  selectedProject.value = project;
  selectedExperience.value = null;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  selectedProject.value = null;
  selectedExperience.value = null;
}
</script>
