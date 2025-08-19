<style src="../assets/components/project.css"></style>
<template>
  <section class="project">
    <div class="card-title">
      <h2 class="title xlarge">{{ title }}</h2>
      <h3 class="subtitle medium">{{ subtitle }}</h3>
    </div>
    <hr class="card-divider" />
    <div class="card-description">
      <div class="button" @click="handleButtonClick">
        <img class="expand" src="/expand-400.png" alt="expand icon"></img><span class="medium">{{ $t("projects.detail") }}</span>
      </div>
      <p class="langage medium">{{ langage }}</p>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const emit = defineEmits(["open-modal"]);
defineProps({
  key: String,
  title: String,
  subtitle: String,
  langage: String,
  url: String,
});

function handleButtonClick() {
  emit("open-modal");
}
</script>
