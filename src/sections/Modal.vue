<template>
  <div class="modal" @click="$emit('close')">
    <ProjectModal v-if="project" v-bind="project" @close="$emit('close')" />
    <InternshipModal
      v-else-if="experience && experience.type === 'internship'"
      v-bind="experience"
      @close="$emit('close')"
    />
    <ScholarshipModal
      v-else-if="experience && experience.type === 'scholarship'"
      v-bind="experience"
      @close="$emit('close')"
    />
  </div>
</template>

<script setup>
import ProjectModal from "../components/ProjectModal.vue";
import InternshipModal from "../components/InternshipModal.vue";
import ScholarshipModal from "../components/ScholarshipModal.vue";
defineProps({ project: Object, experience: Object });
</script>
