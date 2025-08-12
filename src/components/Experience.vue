<style src="../assets/components/experience.css"></style>
<template>
  <section class="experience">
    <div class="card-title">
      <h2 class="title xlarge">{{ title }}</h2>
      <h3 class="subtitle medium">{{ subtitle }}</h3>
    </div>
    <hr class="card-divider" />
    <div class="card-description">
      <div class="button" @click="handleButtonClick(url)">
        <span class="medium">+ Plus</span>
      </div>
      <div class="period">
        <p class="date medium">
          {{ monthNameStart }} <span class="big h2">{{ yearStart }}</span>
        </p>
        <p class="date medium">
          {{ monthNameEnd }} <span class="big h2">{{ yearEnd }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

// TODO: Can deploy cards instead of links

const props = defineProps({
  title: String,
  subtitle: String,
  startDate: String,
  endDate: String,
  url: String,
});

function parseMonthYear(str) {
  if (!str) return null;
  const [year, month] = str.split("-").map(Number);
  // Mois -1 car JS commence à 0
  return new Date(year, month - 1, 1);
}

const startDateParsed = computed(() => parseMonthYear(props.startDate));
const endDateParsed = computed(() => parseMonthYear(props.endDate));

const monthNameStart = computed(() =>
  startDateParsed.value
    ? startDateParsed.value.toLocaleString("fr-FR", { month: "long" })
    : ""
);

const yearStart = computed(() =>
  startDateParsed.value ? startDateParsed.value.getFullYear() : ""
);

const monthNameEnd = computed(() =>
  endDateParsed.value
    ? endDateParsed.value.toLocaleString("fr-FR", { month: "long" })
    : ""
);

const yearEnd = computed(() =>
  endDateParsed.value ? endDateParsed.value.getFullYear() : ""
);

function handleButtonClick(url) {
  window.open(url, "_blank");
}
</script>
