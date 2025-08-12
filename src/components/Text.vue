<style src="../assets/components/text.css"></style>
<template>
  <section class="text">
    <h2 class="h3">{{ title }}</h2>
    <p class="medium">{{ subtitle }}</p>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
});
</script>
