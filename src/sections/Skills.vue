<style src="../assets/sections/skills.css"></style>
<template>
  <section class="skills component">
    <div class="skills-container scroll">
      <div class="filter-left">
        <div class="solid-left"></div>
        <div class="fade-left"></div>
      </div>
      <div class="filter-right">
        <div class="fade-right"></div>
        <div class="solid-right"></div>
      </div>
      <div class="scroll-content icon-wrapper big-icons">
        <div v-for="img in images" :key="img.src" class="icon-container">
          <img :src="base + 'skills/' + img.src" :alt="img.alt" class="icon" />
          <span class="tooltiptext">{{ img.tooltip }}</span>
        </div>
      </div>
      <div class="scroll-content icon-wrapper big-icons" aria-hidden="true">
        <div
          v-for="img in images"
          :key="img.src + '-dup'"
          class="icon-container"
        >
          <img :src="base + 'skills/' + img.src" :alt="img.alt" class="icon" />
          <span class="tooltiptext">{{ img.tooltip }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      base: import.meta.env.BASE_URL || "/",
    };
  },
  async mounted() {
    try {
      const res = await fetch(this.base + "skills/list.json");
      const data = await res.json();
      if (Array.isArray(data)) {
        this.images = data;
      } else {
        console.error("Le fichier JSON ne contient pas un tableau valide.");
      }
    } catch (e) {
      console.error("Erreur chargement images", e);
    }
  },
};
</script>
