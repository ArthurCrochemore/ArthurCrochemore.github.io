<style src="../assets/sections/header.css"></style>
<template>
  <section class="header component icon-wrapper medium-icons">
    <div class="left-header"></div>
    <div class="main-header">
      <a
        href="https://github.com/ArthurCrochemore"
        target="_blank"
        rel="noopener noreferrer"
        ><img
          class="icon"
          src="/github_logo.png"
          :alt="$t('header.githubAlt')"
        />
      </a>
    </div>
    <div class="right-header">
      <div class="langages button" @click="swapLanguage()">
        <span>{{ $t("header.icon") }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

function swapLanguage() {
  locale.value = locale.value === "fr" ? "en" : "fr";
}

function openFigma() {
  window.open(
    "https://www.figma.com/design/CBWx83JGzNZDE9X1aJSgj3/Portfolio?node-id=0-1&t=1ULsyDXSDoby3bBu-1",
    "_blank"
  );
}
</script>
