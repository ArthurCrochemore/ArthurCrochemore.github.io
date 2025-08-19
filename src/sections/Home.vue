<style src="../assets/sections/home.css"></style>
<template>
  <section class="home component">
    <h1 class="h1">{{ $t("home.title") }}</h1>
    <h2 class="h3">{{ $t("home.subtitle") }}</h2>
    <div class="contact">
      <div
        id="gmail-button"
        class="button"
        @click="handleClick($t('home.contact.gmail.url'))"
      >
        <span class="medium">{{ $t("home.contact.gmail.title") }}</span>
      </div>
      <div
        id="linkedin-button"
        class="button"
        @click="handleClick($t('home.contact.linkedin.url'))"
      >
        <span class="medium">{{ $t("home.contact.linkedin.title") }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

function handleClick(url) {
  window.open(url, "_blank");
}
</script>
