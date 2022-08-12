<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.align-items-center.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/sintesis/img1.png')
      .col-lg
        p #[b #[i.txt-color2 As a synthesis, the following conceptual map of the theme developed in this component is presented, in attention to the modal verbs which are used to make requests and petitions. Affirmative, negative and interrogative structures are also presented using these modal verbs. In addition, compound sentences and vocabulary related to personal, social and work activities are integrated, as well as physical, social and cognitive skills.]]
        p.txt-color3.mb-0 A modo de síntesis, se presenta el siguiente mapa conceptual del tema desarrollado en este componente , en atención a los verbos modales que se utilizan para realizar solicitudes y peticiones. Las estructuras afirmativas, negativas e interrogativas también se presentan usando estos verbos modales. Además, se integran oraciones compuestas y vocabulario relacionado con actividades personales, sociales y laborales, así como habilidades físicas, sociales y cognitivas.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/img2.png")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo1.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
