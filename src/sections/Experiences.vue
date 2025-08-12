<style src="../assets/sections/experiences.css"></style>
<template>
  <section class="experiences component">
    <div class="vertical-wrapper">
      <div class="horizontal-wrapper">
        <div class="col col-left">
          <Experience
            :title="$t('experiences.professional.experience1.title')"
            :subtitle="$t('experiences.professional.experience1.subtitle')"
            :startDate="$t('experiences.professional.experience1.startDate')"
            :endDate="$t('experiences.professional.experience1.endDate')"
            :url="$t('experiences.professional.experience1.url')"
          />
          <Experience
            :title="$t('experiences.professional.experience2.title')"
            :subtitle="$t('experiences.professional.experience2.subtitle')"
            :startDate="$t('experiences.professional.experience2.startDate')"
            :endDate="$t('experiences.professional.experience2.endDate')"
            :url="$t('experiences.professional.experience2.url')"
          />
          <Experience
            :title="$t('experiences.professional.experience3.title')"
            :subtitle="$t('experiences.professional.experience3.subtitle')"
            :startDate="$t('experiences.professional.experience3.startDate')"
            :endDate="$t('experiences.professional.experience3.endDate')"
            :url="$t('experiences.professional.experience3.url')"
          />
        </div>

        <div class="divider divider-big-screen"></div>

        <div class="col col-right">
          <Experience
            :title="$t('experiences.academic.experience1.title')"
            :subtitle="$t('experiences.academic.experience1.subtitle')"
            :startDate="$t('experiences.academic.experience1.startDate')"
            :endDate="$t('experiences.academic.experience1.endDate')"
            :url="$t('experiences.academic.experience1.url')"
          />
          <Experience
            :title="$t('experiences.academic.experience2.title')"
            :subtitle="$t('experiences.academic.experience2.subtitle')"
            :startDate="$t('experiences.academic.experience2.startDate')"
            :endDate="$t('experiences.academic.experience2.endDate')"
            :url="$t('experiences.academic.experience2.url')"
          />
          <Experience
            :title="$t('experiences.academic.experience3.title')"
            :subtitle="$t('experiences.academic.experience3.subtitle')"
            :startDate="$t('experiences.academic.experience3.startDate')"
            :endDate="$t('experiences.academic.experience3.endDate')"
            :url="$t('experiences.academic.experience3.url')"
          />
        </div>
      </div>

      <div class="divider divider-small-screen"></div>
    </div>
  </section>
</template>

<script setup>
import Experience from "../components/Experience.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
