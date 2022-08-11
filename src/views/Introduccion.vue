<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.bg-color1.mb-5
      .col-4.col-lg-auto
        figure
          img(src='@/assets/curso/intro/img2.svg')
      .col
        p.mb-0 #[i.text-white In this formative component, modal verbs are presented. Through them, requests and petitions can be done. They behave as auxiliary verbs, since they always accompany the main verb of the sentence. ]
    p.mb-5 Se invita a explorar el video introductorio que se presenta a continuación:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0dRzyIwlTFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
