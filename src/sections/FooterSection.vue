<style src="../assets/sections/footer.css"></style>
<template>
  <section class="footer component">
    <h3 class="large vue">{{ $t("footer.poweredBy") }}</h3>
    <h3 class="medium contacts">
      <a :href="$t('footer.contact.gmail.url')">{{
        $t("footer.contact.gmail.title")
      }}</a>
      |
      <a
        :href="$t('footer.contact.linkedin.url')"
        target="_blank"
        >{{ $t("footer.contact.linkedin.title") }}</a
      >
    </h3>
  </section>
</template>
