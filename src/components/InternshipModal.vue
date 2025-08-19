<template>
  <section class="experience internship-modal" @click.stop>
    <span class="close" @click="$emit('close')">X</span>
    <div class="card-title">
      <h2 class="title xlarge">{{ title }}</h2>
      <h3 class="subtitle medium">{{ subtitle }}</h3>
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
        <!-- <div v-if="contractType" class="icon-wrapper xsmall-icons">
          <img class="icon" src="/modal/contract-icon.png" alt="" />
          <h3 class="contract medium info">{{ contractType }}</h3>
        </div> -->
      </div>
      <div v-if="missions && missions.length">
        <h2 class="context-title large detail-title">{{ missionsTitle }}</h2>
        <ul class="context-main-courses medium detail">
          <li v-for="(mission, i) in missions" :key="i">{{ mission }}</li>
        </ul>
      </div>
      <div v-if="achievements && achievements.length">
        <h2 class="achievment-title large detail-title">
          {{ achievementsTitle }}
        </h2>
        <ul class="achievment-details medium detail">
          <li v-for="(ach, i) in achievements" :key="i">{{ ach }}</li>
        </ul>
      </div>
    </div>
    <div class="card-footer">
      <h3 class="links medium">{{ tm("experiences.links") }}</h3>
      <a
        class="school-link"
        :href="url"
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
  subtitle: String,
  startDate: String,
  endDate: String,
  location: String,
  contractType: String,
  missions: Array,
  missionsTitle: String,
  achievements: Array,
  achievementsTitle: String,
  url: String,
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
