<style src="../assets/components/experience.css"></style>

<template>
  <section class="experience scholarship-modal" @click.stop>
    <span class="close" @click="$emit('close')">X</span>
    <div class="card-title">
      <h2 class="title xlarge">{{ title }}</h2>
      <h3 class="subtitle medium">{{ diploma }}</h3>
    </div>
    <hr class="card-divider" />
    <div class="card-details">
      <div class="infos">
        <div class="icon-wrapper xsmall-icons">
          <img class="icon" src="/modal/date-icon.png" alt="" />
          <h3 class="date medium info">
            {{ months[startMonthIndex] }} {{ yearStart }} -
            {{ months[endMonthIndex] }} {{ yearEnd }}
          </h3>
        </div>
        <div v-if="location" class="icon-wrapper xsmall-icons">
          <img class="icon" src="/modal/localisation-icon.png" alt="" />
          <h3 class="location medium info">{{ location }}</h3>
        </div>
        <div v-if="diploma" class="icon-wrapper xsmall-icons">
          <img class="icon" src="/modal/diploma-icon.png" alt="" />
          <h3 class="diploma medium info">{{ diploma }}</h3>
        </div>
      </div>
      <h2
        v-if="content && content.length"
        class="context-title large detail-title"
      >
        {{ contentTitle }}
      </h2>
      <ul
        v-if="content && content.length"
        class="context-main-courses medium detail"
      >
        <li v-for="(item, i) in content" :key="i">{{ item }}</li>
      </ul>
      <h2
        v-if="achievements && achievements.length"
        class="achievment-title large detail-title"
      >
        {{ achievementsTitle }}
      </h2>
      <ul
        v-if="achievements && achievements.length"
        class="achievment-details medium detail"
      >
        <li v-for="(ach, i) in achievements" :key="i">{{ ach }}</li>
      </ul>
    </div>
    <div class="card-footer">
      <h3 class="links medium">{{ tm("experiences.links") }}</h3>
      <a
        class="school-link"
        :href="githubUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/modal/link-icon.png" alt="SCHOOL ICON" class="icon" />
      </a>
    </div>
  </section>
</template>

<script setup>
import { computed, toRaw } from "vue";
import { useI18n } from "vue-i18n";
const { tm } = useI18n();

const props = defineProps({
  title: String,
  diploma: String,
  startDate: String,
  endDate: String,
  location: String,
  content: Array,
  contentTitle: String,
  achievements: Array,
  achievementsTitle: String,
});

const months = computed(() => {
  const arr = tm("experiences.monthsShort");
  return Array.isArray(arr) ? toRaw(arr) : [];
});

function parseMonthYear(str) {
  if (!str) return null;
  const [year, month] = str.split("-").map(Number);
  // Mois -1 car JS commence à 0
  return new Date(year, month - 1, 1);
}

const startDateParsed = computed(() => parseMonthYear(props.startDate));
const endDateParsed = computed(() => parseMonthYear(props.endDate));

const startMonthIndex = computed(() =>
  startDateParsed.value ? startDateParsed.value.getMonth() : 0
);
const endMonthIndex = computed(() =>
  endDateParsed.value ? endDateParsed.value.getMonth() : 0
);

const yearStart = computed(() =>
  startDateParsed.value ? startDateParsed.value.getFullYear() : ""
);

const yearEnd = computed(() =>
  endDateParsed.value ? endDateParsed.value.getFullYear() : ""
);
</script>
