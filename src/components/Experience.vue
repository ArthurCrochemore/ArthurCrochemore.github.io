<style src="../assets/components/experience.css"></style>
<template>
  <section class="experience">
    <div class="card-title">
      <h2 class="title xlarge">{{ title }}</h2>
      <h3 class="subtitle medium">{{ subtitle }}</h3>
    </div>
    <hr class="card-divider" />
    <div class="card-description">
      <div class="button" @click="handleButtonClick">
        <img class="expand" src="/expand-200.png" alt="expand icon"></img><span class="medium">{{ $tm("projects.detail") }}</span>
      </div>
      <div class="period">
        <p class="date medium">
          {{ months[startMonthIndex] }}
          <span class="big h2">{{ yearStart }}</span>
        </p>
        <p class="date medium">
          {{ months[endMonthIndex] }}
          <span class="big h2">{{ yearEnd }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, toRaw } from "vue";
import { useI18n } from "vue-i18n";
const { tm } = useI18n();

const emit = defineEmits(["open-modal"]);
const props = defineProps({
  title: String,
  subtitle: String,
  startDate: String,
  endDate: String,
  url: String,
});

const months = computed(() => {
  const arr = tm("experiences.months");
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

function handleButtonClick() {
  emit("open-modal");
}
</script>
