<style src="../assets/components/project.css"></style>
<template>
  <section class="project">
    <div class="card-title">
      <h2 class="title xlarge">{{ title }}</h2>
      <h3 class="subtitle medium">{{ subtitle }}</h3>
    </div>
    <hr class="card-divider" />
    <div class="card-description">
      <div class="button" @click="handleButtonClick(title)">
        <span class="medium">+ Plus</span>
      </div>
      <p class="langage medium">{{ langage }}</p>
    </div>
  </section>
</template>

<script setup>
// TODO: Can open modal for details instead of links

defineProps({
  title: String,
  subtitle: String,
  langage: String,
});

function handleButtonClick(title) {
  let url = "https://github.com/";
  switch (title) {
    case "Cybersécurité":
      url =
        "https://docs.google.com/document/d/1F1tvf01nFmhPcKEDT9nv5o8P576NNxlLFXyao1M2zQ0/edit?usp=embed_facebook";
      break;
    case "Commande Gestuelle":
      url += "ArthurCrochemore/Projet-Commande-Gestuelle-Mobile";
      break;
    case "KazaKlub":
      url = "https://kazaklub.com/";
      break;
    case "Application Covoiturage":
      url += "ArthurCrochemore/Application-Covoiturage";
      break;
    case "Gestion de Stock":
      url += "ChakSem/Tp-Plateformes-NET";
      break;
    case "Optimisation Discrète":
      url += "ChakSem/Optimistion-Discrete";
      break;
    case "Qualité Logicielle":
      url += "nightyday/Prj_Qualit-_logiciel";
      break;
    case "Simulation Hopital":
      url += "ArthurCrochemore/ProjetSimulation";
      break;
    case "Projet Java":
      url += "ArthurCrochemore/-Projet-Tutore-Java";
      break;
    default:
      return;
  }
  window.open(url, "_blank");
}
</script>
