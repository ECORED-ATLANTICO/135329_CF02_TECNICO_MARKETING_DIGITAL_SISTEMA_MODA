<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Apreciado aprendiz, bienvenido a este momento de aprendizaje orientado a las herramientas del entorno digital según el público objetivo y las condiciones de la empresa. Antes de empezar se sugiere revisar la siguiente infografía para identificar el contexto de aprendizaje.
        
        div.bg-color-2.tarjeta.p-3.d-inline-block.mb-5
          h3.mb-0 ¿Cómo surge este curso?
        
        p.mb-5 Durante este componente de formación, el <em>marketing</em> digital es el pretexto de aprendizaje y desde donde se direcciona esta experiencia de aprendizaje. Sin embargo, es importante tener presente la información que se puede leer a continuación:

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
          .col-lg-8
            p El <em>marketing</em> digital ha generado un impacto importante en la sociedad, al demostrar que es posible generar nuevas opciones de mercado haciendo uso de las TIC (Tecnologías de la Información y las Comunicaciones) como herramientas de conexión y comercialización.
            .bg-color-3.p-4
              p.mb-0 El mundo está conectado en todo momento y lugar a través de las redes sociales. Queriendo o no, estas se han convertido en un canal imprescindible para desarrollar relaciones interpersonales, promocionar productos y servicios, o impartir educación. En fin, un amplio abanico de posibilidades que se desencadenaron a partir de la Industria 4.0. Es aquí donde se observan nuevas oportunidades de desarrollo. Entendiendo que el uso de una red social va más allá de ver memes o estar enterado de la vida de los demás, el <em>marketing</em> digital demuestra que se puede generar desarrollo a través de medios alternativos con amplio alcance a nivel mundial. Pero, ¿qué es el <em>marketing</em> digital? ¿Dónde surge el <em>marketing</em> digital? Para contestar estas y otras preguntas, se sugiere mantener la atención en este componente de formación.
        
        div.bg-color-2.tarjeta.p-3.d-inline-block.mb-5
          h3.mb-0 ¿Cuál es el objeto de aprendizaje?
        
        img(src="@/assets/curso/intro/3.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-8(data-aos="fade-up")
            p.banner-text Como se mencionó anteriormente, el <em>marketing</em> digital es el objeto de aprendizaje que, a través de unas acciones de formación, se espera que desarrolle:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.col-xl-4.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center.mb-3.position-relative(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/intro/01.svg' alt='Conocimiento')
          .tarjeta.tarjeta--azul
            .p-3
              h5.mb-0 Conocimiento
          img.position-absolute.pst(src='@/assets/curso/intro/5.png', style="max-width: 101px" alt='')

        .tarjeta-avatar-b.align-items-center.mb-3.position-relative(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/intro/02.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-3
              h5.mb-0 Habilidades
          img.position-absolute.pst(src='@/assets/curso/intro/6.png', style="max-width: 101px" alt='')

        .tarjeta-avatar-b.align-items-center.mb-3.position-relative(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/intro/03.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-3
              h5.mb-0 Actitudes
          img.position-absolute.pst(src='@/assets/curso/intro/7.png', style="max-width: 101px" alt='')
      .col-md-8.col-lg-5.col-xl-3.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/intro/4.png", data-aos="zoom-in")
      .col-xl-3
        .bg-color-3.p-4
          h5 Algunos temas que se verán son:
          ul.lista-ul--color.ms-3
            li.mb-3.d-flex
              i.fas.fa-angle-right.bg-color-4
              | Entorno digital.
            li.mb-3.d-flex
              i.fas.fa-angle-right.bg-color-4
              span Fundamentos del #[em marketing] digital.
            li.mb-3.d-flex
              i.fas.fa-angle-right.bg-color-4
              | Comercio electrónico.
            li.mb-3.d-flex
              i.fas.fa-angle-right.bg-color-4
              | Estrategia digital.
            li.mb-3.d-flex
              i.fas.fa-angle-right.bg-color-4
              span <em>Social media</em>.

    div.bg-color-2.tarjeta.p-3.d-inline-block.mb-5
      h3.mb-0 ¿Cómo está estructurado el componente de formación?

    .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El curso virtual está estructurado a partir de componentes de formación que contienen la información necesaria para que se puedan desarrollar conocimientos, habilidades y actitudes en el marco de la competencia estructuración de la estrategia de <em>marketing</em> digital acorde con los objetivos del componente.

    div.bg-color-5.tarjeta.p-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          img.d-lg-flex.d-none(src="@/assets/curso/intro/9.png").mx-auto
        .col-lg.order-1.mb-3.mb-lg-0
          p.mb-0 En cada componente, es posible encontrar diferentes recursos de aprendizaje y unas actividades de aprendizaje. Es necesario buscar la guía de actividades de aprendizaje para desarrollarla.

    div.bg-color-2.tarjeta.p-3.d-inline-block.mb-5
      h3.mb-0 ¿Quiénes están en el curso?

    p.mb-5 Los cursos virtuales son entornos de aprendizaje donde convergen:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-5.col-xl-4.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/intro/10.png", data-aos="zoom-in")
      .col-lg-7.col-xl-3.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center.mb-5.position-relative(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/intro/01.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              h5.mb-0 Contenidos
          img.position-absolute.pst(src='@/assets/curso/intro/11.png', style="max-width: 101px" alt='')

        .tarjeta-avatar-b.align-items-center.mb-5.position-relative(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/intro/02.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              h5.mb-0 Recursos
          img.position-absolute.pst(src='@/assets/curso/intro/12.png', style="max-width: 101px" alt='')

        .tarjeta-avatar-b.align-items-center.mb-5.position-relative(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/intro/03.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              h5.mb-0 Personas
          img.position-absolute.pst(src='@/assets/curso/intro/13.png', style="max-width: 101px" alt='')
      .col-xl-5
        .bg-color-3.p-4.mb-3
          p.mb-0 Que de una forma intencionada constituyen una comunidad de aprendizaje y práctica. Es decir, no se está solo, se tiene un conjunto de personas de diferentes lugares que se unen a las reflexiones e inquietudes. Por eso, es preciso recordar la importancia de participar en los foros y utilizar otras herramientas del curso para comunicarse.
        p Finalmente, recuerde estos aspectos para iniciar y culminar con éxito el curso.
        ul.lista-ul--color.ms-3
          li.mb-3.d-flex
            i.fas.fa-angle-right.bg-color-4
            | Organizar un horario de estudio individual y colaborativo.
          li.mb-3.d-flex
            i.fas.fa-angle-right.bg-color-4
            | Revisar las notificaciones del curso constantemente.
          li.mb-3.d-flex
            i.fas.fa-angle-right.bg-color-4
            | Participar en los foros y actividades sugeridas por el instructor.
          li.mb-3.d-flex
            i.fas.fa-angle-right.bg-color-4
            | Entregar las evidencias esperadas durante este componente de formación.

    .row.justify-content-center
      .col-lg-6
        .cajon.color-acento-botones.bg-color-6.p-4.mb-4
          p.mb-0.text-center En caso de alguna inquietud, no duden en escribirnos.


    

</template>

<script>
export default {
  name: 'Introduccion',
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
