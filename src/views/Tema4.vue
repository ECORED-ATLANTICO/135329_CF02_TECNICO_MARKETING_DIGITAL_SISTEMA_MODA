<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Estrategia digital
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
          .col-lg-8
            p De acuerdo con el portal web Walter Giu, una estrategia digital se define como “Una combinación de procesos que apuntan a identificar y aprovechar oportunidades digitales para mejorar las ventajas competitivas” (Giu, 2018); en otras palabras, es el conjunto y manejo de herramientas que se identifican para posicionar una empresa en la web.
            .row.align-items-center.bg-color-9.p-4
              .col-lg-auto.mb-3.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema4/2.svg").mx-auto
              .col-lg
                p.mb-0 Dentro de la estructura de la estrategia digital, se tienen en cuenta una lista de acciones, donde se debe desarrollar una investigación previa, definir objetivos claros, determinar qué herramientas son útiles, ejecutar y realizar seguimiento de las tácticas propuestas y analizar los resultados. En la siguiente imagen, se detallan estas acciones.

        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 2.
              span Estructura de la estrategia digital
            img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema4/3.svg", alt="-Investigación: Público. Contenido y diseño. Redes sociales. Comunicación. Competencia. - Objetivos: Objetivos cuantitativos. Objetivos cualitativos. Definición de KPI. - Estrategias: Segmentación. Posicionamiento. Definición de estrategias. Ejecución de tácticas. - Análisis: Monitorización. Medición de KPI. Análisis de los resultados. Elaboración de informes.")
            img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema4/3-mob.svg", alt="-Investigación: Público. Contenido y diseño. Redes sociales. Comunicación. Competencia. - Objetivos: Objetivos cuantitativos. Objetivos cualitativos. Definición de KPI. - Estrategias: Segmentación. Posicionamiento. Definición de estrategias. Ejecución de tácticas. - Análisis: Monitorización. Medición de KPI. Análisis de los resultados. Elaboración de informes.")
            figcaption Nota. Adaptada de Giu, W. (2018). Qué es una Estrategia digital.
        
        separador
        
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Tipos de estrategias
        
        .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/4.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.d-block Hay una amplia variedad de opciones que las empresas pueden adoptar como estrategia digital para el logro de sus objetivos propuestos, todo esto, teniendo en cuenta las herramientas con las que cuenta, el público al cual se dirige y el entorno en el que se desenvuelve. 
            p.mb-0 Según Xie (2019), algunas estrategias destacadas y sus objetivos se presentan en el siguiente video:
    
    figure
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ET6OSOWke5o" title="Tipos de estrategias" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
   

    separador
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.2 Plan de #[em marketing] digital
        
        img(src="@/assets/curso/tema4/5.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text 
              span.d-block.mb-3 El plan de #[em marketing] digital se puede definir como el plan de ruta para la consecución de una meta determinada, lo que permite un enfoque más preciso en la centralización de todos los esfuerzos por un único objetivo y fomenta la creatividad en la búsqueda de los mejores mecanismos para su desarrollo. 
              span.d-block Según Xie (2019), se definen los siguientes pasos para un plan de #[em marketing] digital:
        
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/6.png", data-aos="zoom-in")
          .col-lg-8
            SlyderF(columnas="col-lg-6 col-xl-6").mb-5
              .tarjeta.bg-color-sintesis.p-4.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    figure
                      img(src='@/assets/curso/tema4/7.svg', alt='')
          
                h3.bg-color-9.p-3.mb-4.text-center Análisis de la marca
                p.text-center Para marcar la ruta a seguir, como primera medida, se debe conocer la marca en todos sus aspectos. Partiendo de esto, se desarrolla una matriz DOFA (debilidades, oportunidades, fortalezas y amenazas).

              .tarjeta.bg-color-sintesis.p-4.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    figure
                      img(src='@/assets/curso/tema4/8.svg', alt='')
          
                h3.bg-color-9.p-3.mb-4.text-center Conocimiento de los objetivos de la empresa
                p.text-center Definir y entender los objetivos más grandes a los que apunta la empresa, teniendo en cuenta los que se pueden desarrollar a corto y largo plazo.
              .tarjeta.bg-color-sintesis.p-4.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    figure
                      img(src='@/assets/curso/tema4/9.svg', alt='')
          
                h3.bg-color-9.p-3.mb-4.text-center Análisis del mercado
                p.text-center Se debe analizar completamente el mercado que se va a abordar, teniendo en cuenta factores geográficos, demográficos, socioeconómicos y psicográficos.
              .tarjeta.bg-color-sintesis.p-4.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    figure
                      img(src='@/assets/curso/tema4/10.svg', alt='')
          
                h3.bg-color-9.p-3.mb-4.text-center Segmentar el cliente objetivo
                p.text-center Conocer y definir el público al cual serán dirigidas todas las estrategias, reconociendo datos básicos, pero sobre todo identificando gustos, necesidades o aspiraciones.
              .tarjeta.bg-color-sintesis.p-4.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    figure
                      img(src='@/assets/curso/tema4/11.svg', alt='')
          
                h3.bg-color-9.p-3.mb-4.text-center Análisis del mercado digital
                p.text-center Conocer la competencia, a través de una serie de técnicas de mercadotecnia, permitirá situarnos en un contexto aterrizado.
              .tarjeta.bg-color-sintesis.p-4.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    figure
                      img(src='@/assets/curso/tema4/12.svg', alt='')
          
                h3.bg-color-9.p-3.mb-4.text-center Establecer los objetivos del #[em marketing]
                p.text-center Definir los objetivos específicos que se espera lograr de determinada campaña.
              .tarjeta.bg-color-sintesis.p-4.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    figure
                      img(src='@/assets/curso/tema4/13.svg', alt='')
          
                h3.bg-color-9.p-3.mb-4.text-center Definir actividades, KPI y presupuestos
                p.text-center Definir las estrategias a utilizar para lograr los resultados propuestos, estableciendo los costos que estas conllevan.
              .tarjeta.bg-color-sintesis.p-4.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    figure
                      img(src='@/assets/curso/tema4/14.svg', alt='')
          
                h3.bg-color-9.p-3.mb-4.text-center Inicio de actividades definidas
                p.text-center Poner en marcha las actividades propuestas en el plan.
              .tarjeta.bg-color-sintesis.p-4.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    figure
                      img(src='@/assets/curso/tema4/15.svg', alt='')
          
                h3.bg-color-9.p-3.mb-4.text-center Seguimiento del plan de #[em marketing]
                p.text-center Constantemente, se deben revisar las actividades desarrolladas para que concuerden con los objetivos propuestos, identificar si se alejan o siguen el camino propuesto, con el fin de ajustar o mejorar.





</template>

<script>
export default {
  name: 'Tema4',
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
