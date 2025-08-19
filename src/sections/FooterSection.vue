<style src="../assets/sections/footer.css"></style>
<template>
  <section class="footer component">
    <h3 class="h3 vue">{{ $t("footer.poweredBy") }}</h3>
    <div class="links">
      <div
        class="icon-wrapper small-icons"
        v-for="(link, key) in links"
        :key="key"
      >
        <img
          class="icon"
          :alt="link.alt"
          :src="link.src"
          @click="handleClick(link.url)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
const { tm } = useI18n();

const links = computed(() => tm("footer.links"));

function handleClick(url) {
  window.open(url, "_blank");
}
</script>
