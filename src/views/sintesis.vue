<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-sm-8.col-lg-4
        figure
          img(src="@/assets/curso/sintesis.png", alt="")
      .col-lg-8
        p El componente formativo #[em Marketing] digital, ofrece al aprendiz una aproximación al entorno digital y a los fundamentos del #[em marketing] digital en contextos actuales de comunicación y comercialización, a través del reconocimiento de medios propios, pagados y ganados, así como del uso de plataformas digitales, el componente introduce herramientas como #[em blog], #[em e-mail marketing], #[em social media], publicidad #[em online] y posicionamiento en motores de búsqueda, permitiendo comprender cómo se desarrollan los procesos comunicativos y las estrategias de #[em marketing] en entornos digitales.
        .p-4.bg-color-20.rounded-4
          p.mb-0 Asimismo, el componente aborda elementos relacionados con SEO (<em>Search Engine Optimization</em>) y SEM (<em>Search Engine Marketing</em>), junto con la formulación de estrategias digitales orientadas al logro de objetivos empresariales. Se estudian aspectos como la segmentación del cliente objetivo, la definición de objetivos, la planificación de actividades y el seguimiento del plan de <em>marketing</em>. Finalmente, se presentan diferentes tipos de medios sociales y plataformas digitales que permiten la interacción, difusión de contenidos y participación de usuarios dentro del ecosistema digital.
    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La imagen muestra un mapa conceptual titulado Marketing digital, que organiza de forma jerárquica sus principales componentes: el entorno digital, los fundamentos del marketing digital, la diferencia entre SEO (Search Engine Optimization) y SEM (Search Engine Marketing), la estrategia digital y el social media. Cada categoría incluye subtemas como plataformas digitales, tipos de estrategias, plan de marketing digital, contenidos y analítica de redes sociales, así como aspectos legales y de normatividad colombiana, ofreciendo una visión general e integral de esta disciplina. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
