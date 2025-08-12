<style src="../assets/sections/home.css"></style>
<template>
  <section class="home component">
    <h1 class="h1">{{ $t("home.title") }}</h1>
    <h2 class="h3">{{ $t("home.subtitle") }}</h2>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
