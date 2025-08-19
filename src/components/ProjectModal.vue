<style src="../assets/components/project.css"></style>

<template>
  <section class="project project-modal" @click.stop>
    <span class="close" @click="$emit('close')">X</span>
    <div class="card-title">
      <h2 class="title xlarge">{{ title }}</h2>
      <h3 class="subtitle medium">{{ subtitle }}</h3>
    </div>
    <hr class="card-divider" />
    <div class="card-details">
      <div class="infos">
        <div v-if="langage" class="icon-wrapper xsmall-icons">
          <img class="icon" src="/modal/langage-icon.png" alt=""></img>
          <h3 class="langage medium info">{{ langage }}</h3>
        </div>
        <div class="icon-wrapper xsmall-icons">
          <img class="icon" src="/modal/date-icon.png" alt=""></img>
        <h3 class="period medium info">{{ period }}</h3>
        </div>
        <div class="icon-wrapper xsmall-icons">
          <img class="icon" src="/modal/team-icon.png" alt=""></img>
        <h3 class="team medium info">{{ team }}</h3>
        </div>
        <div class="icon-wrapper xsmall-icons">
          <img class="icon" src="/modal/roles-icon.png" alt=""></img>
        <h3 class="role medium info">{{ role }}</h3>
        </div>
        <div class="icon-wrapper xsmall-icons">
          <img class="icon" src="/modal/localisation-icon.png" alt=""></img>
        <h3 class="study medium info">{{ study }}</h3>
        </div>
      </div>

      <h2 v-if="details" class="context-title large detail-title">{{ $t("projects.details") }}</h2>
      <p v-if="details" class="context-details medium detail">
        {{ details }}
      </p>

      <h2
        v-if="achievements && achievements.length"
        class="achievment-title large detail-title"
      >
        {{ $t("projects.achievements") }}
      </h2>
      <ul
        v-if="achievements && achievements.length"
        class="achievment-details medium detail"
      >
        <li v-for="(ach, i) in achievements" :key="i">{{ ach }}</li>
      </ul>
    </div>
    <div class="card-footer">
      <h3 class="links medium">{{ t("projects.links") }}</h3>
      <div class="icon-wrapper">
        <a
          v-if="githubUrl"
          class="github-link"
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/modal/github-icon.png"
            alt="GITHUB ICON"
            class="icon"
          />
        </a>
        <a
          v-if="url"
          class="link"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/modal/link-icon.png"
            alt="EXTERNAL LINK ICON"
            class="icon"
          />
        </a>
        <a
          v-if="gdocUrl"
          class="gdoc-link"
          :href="gdocUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/modal/gdoc-icon.png"
            alt="GDOC ICON"
            class="icon"
          />
        </a>
        <a
          v-if="figmaUrl"
          class="figma-link"
          :href="figmaUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/modal/figma-icon.png"
            alt="FIGMA ICON"
            class="icon"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const props = defineProps({
  key: String,
  title: String,
  subtitle: String,
  langage: String,
  period: String,
  team: String,
  role: String,
  study: String,
  details: String,
  achievements: Array,
  githubUrl: String,
  url: String,
  gdocUrl: String,
  figmaUrl: String,
});

const base = "/public/";
const {
  title,
  subtitle,
  langage,
  period,
  team,
  role,
  study,
  details,
  achievements,
  githubUrl,
  url,
  gdocUrl,
  figmaUrl,
} = props;
</script>
