<style src="../assets/sections/experiences.css"></style>
<template>
  <section class="experiences component">
    <div class="wrapper">
      <div class="experiences-wrapper">
        <Experience
          :title="$t('experiences.professional.experience1.title')"
          :subtitle="$t('experiences.professional.experience1.subtitle')"
          :startDate="$t('experiences.professional.experience1.startDate')"
          :endDate="$t('experiences.professional.experience1.endDate')"
          :url="$t('experiences.professional.experience1.url')"
          @open-modal="
            () =>
              $emit('open-modal', {
                type: 'internship',
                title: $t('experiences.professional.experience1.title'),
                subtitle: $t('experiences.professional.experience1.subtitle'),
                startDate: $t('experiences.professional.experience1.startDate'),
                endDate: $t('experiences.professional.experience1.endDate'),
                location: $t(
                  'experiences.professional.experience1.location',
                  ''
                ),
                contractType: $t(
                  'experiences.professional.experience1.contractType',
                  ''
                ),
                missions:
                  tm('experiences.professional.experience1.missions') || [],
                missionsTitle: $t(
                  'experiences.professional.experience1.missionsTitle',
                  ''
                ),
                achievements:
                  tm('experiences.professional.experience1.achievements') || [],
                achievementsTitle: $t(
                  'experiences.professional.experience1.achievementsTitle',
                  ''
                ),
              })
          "
        />
        <Experience
          :title="$t('experiences.academic.experience1.title')"
          :subtitle="$t('experiences.academic.experience1.subtitle')"
          :startDate="$t('experiences.academic.experience1.startDate')"
          :endDate="$t('experiences.academic.experience1.endDate')"
          :url="$t('experiences.academic.experience1.url')"
          @open-modal="
            () =>
              $emit('open-modal', {
                type: 'scholarship',
                title: $t('experiences.academic.experience1.title'),
                diploma: $t('experiences.academic.experience1.diploma', ''),
                startDate: $t('experiences.academic.experience1.startDate'),
                endDate: $t('experiences.academic.experience1.endDate'),
                location: $t('experiences.academic.experience1.location', ''),
                content: tm('experiences.academic.experience1.content') || [],
                contentTitle: $t(
                  'experiences.academic.experience1.contentTitle',
                  ''
                ),
                achievements:
                  tm('experiences.academic.experience1.achievements') || [],
                achievementsTitle: $t(
                  'experiences.academic.experience1.achievementsTitle',
                  ''
                ),
              })
          "
        />
        <Experience
          :title="$t('experiences.professional.experience2.title')"
          :subtitle="$t('experiences.professional.experience2.subtitle')"
          :startDate="$t('experiences.professional.experience2.startDate')"
          :endDate="$t('experiences.professional.experience2.endDate')"
          :url="$t('experiences.professional.experience2.url')"
          @open-modal="
            () =>
              $emit('open-modal', {
                type: 'internship',
                title: $t('experiences.professional.experience2.title'),
                subtitle: $t('experiences.professional.experience2.subtitle'),
                startDate: $t('experiences.professional.experience2.startDate'),
                endDate: $t('experiences.professional.experience2.endDate'),
                location: $t(
                  'experiences.professional.experience2.location',
                  ''
                ),
                contractType: $t(
                  'experiences.professional.experience2.contractType',
                  ''
                ),
                missions:
                  tm('experiences.professional.experience2.missions') || [],
                missionsTitle: $t(
                  'experiences.professional.experience2.missionsTitle',
                  ''
                ),
                achievements:
                  tm('experiences.professional.experience2.achievements') || [],
                achievementsTitle: $t(
                  'experiences.professional.experience2.achievementsTitle',
                  ''
                ),
              })
          "
        />
        <Experience
          :title="$t('experiences.academic.experience2.title')"
          :subtitle="$t('experiences.academic.experience2.subtitle')"
          :startDate="$t('experiences.academic.experience2.startDate')"
          :endDate="$t('experiences.academic.experience2.endDate')"
          :url="$t('experiences.academic.experience2.url')"
          @open-modal="
            () =>
              $emit('open-modal', {
                type: 'scholarship',
                title: $t('experiences.academic.experience2.title'),
                diploma: $t('experiences.academic.experience2.diploma', ''),
                startDate: $t('experiences.academic.experience2.startDate'),
                endDate: $t('experiences.academic.experience2.endDate'),
                location: $t('experiences.academic.experience2.location', ''),
                content: tm('experiences.academic.experience2.content') || [],
                contentTitle: $t(
                  'experiences.academic.experience2.contentTitle',
                  ''
                ),
                achievements:
                  tm('experiences.academic.experience2.achievements') || [],
                achievementsTitle: $t(
                  'experiences.academic.experience2.achievementsTitle',
                  ''
                ),
              })
          "
        />
        <Experience
          :title="$t('experiences.professional.experience3.title')"
          :subtitle="$t('experiences.professional.experience3.subtitle')"
          :startDate="$t('experiences.professional.experience3.startDate')"
          :endDate="$t('experiences.professional.experience3.endDate')"
          :url="$t('experiences.professional.experience3.url')"
          @open-modal="
            () =>
              $emit('open-modal', {
                type: 'internship',
                title: $t('experiences.professional.experience3.title'),
                subtitle: $t('experiences.professional.experience3.subtitle'),
                startDate: $t('experiences.professional.experience3.startDate'),
                endDate: $t('experiences.professional.experience3.endDate'),
                location: $t(
                  'experiences.professional.experience3.location',
                  ''
                ),
                contractType: $t(
                  'experiences.professional.experience3.contractType',
                  ''
                ),
                missions:
                  tm('experiences.professional.experience3.missions') || [],
                missionsTitle: $t(
                  'experiences.professional.experience3.missionsTitle',
                  ''
                ),
                achievements:
                  tm('experiences.professional.experience3.achievements') || [],
                achievementsTitle: $t(
                  'experiences.professional.experience3.achievementsTitle',
                  ''
                ),
              })
          "
        />

        <Experience
          :title="$t('experiences.academic.experience3.title')"
          :subtitle="$t('experiences.academic.experience3.subtitle')"
          :startDate="$t('experiences.academic.experience3.startDate')"
          :endDate="$t('experiences.academic.experience3.endDate')"
          :url="$t('experiences.academic.experience3.url')"
          @open-modal="
            () =>
              $emit('open-modal', {
                type: 'scholarship',
                title: $t('experiences.academic.experience3.title'),
                diploma: $t('experiences.academic.experience3.diploma', ''),
                startDate: $t('experiences.academic.experience3.startDate'),
                endDate: $t('experiences.academic.experience3.endDate'),
                location: $t('experiences.academic.experience3.location', ''),
                content: tm('experiences.academic.experience3.content') || [],
                contentTitle: $t(
                  'experiences.academic.experience3.contentTitle',
                  ''
                ),
                achievements:
                  tm('experiences.academic.experience3.achievements') || [],
                achievementsTitle: $t(
                  'experiences.academic.experience3.achievementsTitle',
                  ''
                ),
              })
          "
        />
      </div>

      <div class="divider"></div>
    </div>
  </section>
</template>

<script setup>
import Experience from "../components/Experience.vue";
import { useI18n } from "vue-i18n";
const { t, tm } = useI18n();
</script>
