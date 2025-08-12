<style src="../assets/sections/header.css"></style>
<template>
  <section class="header component">
    <img class="model" src="/skills/figma-icon.png" :alt="$t('header.figmaAlt')" @click="openFigma()"></img>
    <img class="logo" src="/github_logo.png" :alt="$t('header.githubAlt')" />
    <div class="langages button" @click="swapLanguage()"><span>{{ $t("header.icon") }}</span></div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

function swapLanguage() {
  locale.value = locale.value === "fr" ? "en" : "fr";
}

function openFigma() {
  window.open("https://www.figma.com/design/CBWx83JGzNZDE9X1aJSgj3/Portfolio?node-id=0-1&t=1ULsyDXSDoby3bBu-1", "_blank");
}
</script>
