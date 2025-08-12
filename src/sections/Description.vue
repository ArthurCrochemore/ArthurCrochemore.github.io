<style src="../assets/sections/description.css"></style>
<template>
  <section class="description component">
    <TextComponent
      :title="$t('description.bloc1.title')"
      :subtitle="$t('description.bloc1.subtitle')"
    />
    <TextComponent
      :title="$t('description.bloc2.title')"
      :subtitle="$t('description.bloc2.subtitle')"
    />
  </section>
</template>

<script setup>
import TextComponent from "../components/Text.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
