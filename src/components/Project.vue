<style src="../assets/components/project.css"></style>
<template>
  <section class="project">
    <div class="card-title">
      <h2 class="title xlarge">{{ title }}</h2>
      <h3 class="subtitle medium">{{ subtitle }}</h3>
    </div>
    <hr class="card-divider" />
    <div class="card-description">
      <div class="button" @click="handleButtonClick(url)">
        <span class="medium">+ Plus</span>
      </div>
      <p class="langage medium">{{ langage }}</p>
    </div>
  </section>
</template>

<script setup>
// TODO: Can open modal for details instead of links

defineProps({
  key: String,
  title: String,
  subtitle: String,
  langage: String,
  url: String,
});

function handleButtonClick(url) {
  window.open(url, "_blank");
}
</script>
