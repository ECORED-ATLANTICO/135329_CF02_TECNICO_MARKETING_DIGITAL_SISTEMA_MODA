<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diferencia entre SEO y SEM. ¿Cómo definir su uso?
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        div.bg-color-14.tarjeta.mb-5
          .row.align-items-center.justify-content-center
            .col-lg-3.mb-3.mb-lg-0
              img.d-lg-flex.d-none(src="@/assets/curso/tema3/1.png").mx-auto
            .col-lg-7
              p.mb-0 Para entender el significado de <em>Search Engine Optimization (SEO)</em> y <em>Search Engine Marketing (SEM)</em>, es importante conocer que, al momento de consultar acerca de un tema en específico, es normal dirigirse a Google y en la barra principal digitar la palabra clave que uno cree lo puede llevar al sitio web de su interés. Este elemento, que se usa con total normalidad, detona un mecanismo dentro de Google denominado “motor de búsqueda”, el cual recopila la información existente en los sitios web y dirige hacia los distintos lugares donde se cree que es posible encontrar todo lo que se necesita, teniendo en cuenta la palabra clave.
        
        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-6.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-15.h-100.p-4
              .row.justify-content-center.align-items-end.mb-3
                .col-2
                  figure
                    img(src='@/assets/curso/tema3/2.svg', alt='')
                .col-10
                  h3 SEO
              p Teniendo en cuenta lo anterior, según el portal web 40deFiebre (<em>Socialmood</em>, 2020), es posible definir SEO como el proceso de mejorar la visibilidad de un sitio web en una búsqueda orgánica, es decir, que no necesita pagarse. Es de destacar que el SEO radica su importancia en la ayuda a los motores de búsqueda para entender de qué se trata una página web y si es útil para la persona que busca información relacionada con esta. Esto permite que una empresa tenga presencia en la web y tenga mayor reconocimiento por el público que se espera.
        
          .col-sm-6.col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-16.h-100.p-4
              .row.justify-content-center.align-items-end.mb-3
                .col-2
                  figure
                    img(src='@/assets/curso/tema3/3.svg', alt='')
                .col-10
                  h3 SEM
              p Por otro lado, según el portal web <em>Cyberclick</em> (<em>Cyberclick Academy</em>, 2020), se denomina SEM a las campañas de anuncios pagados desarrolladas en los buscadores y aparecen en posiciones destacadas dentro de los resultados de búsqueda. Este es un gran <em>plus</em> para las campañas digitales, posicionándolas en primer lugar de búsqueda, siempre y cuando el anunciante tenga un presupuesto definido para esta estrategia, en la que se cobra por cada clic que realicen los usuarios.

        .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/4.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Con la información suministrada, se puede ver que la gran diferencia entre SEO y SEM radica en que la marca anunciante, por el hecho de realizar un pago definido, tendrá total certeza de posicionarse en las búsquedas relacionadas con su público objetivo. Mientras que el posicionamiento que no requiere de pago sí necesita mayor trabajo, con una constante generación de contenidos de interés y un sitio web que inspire visitar, con relación a determinadas palabras clave.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        div.bg-color-17.tarjeta.p-4.mb-5
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-2
              img.d-lg-flex.d-none(src="@/assets/curso/tema3/5.png").mx-auto
            .col-lg.order-1.mb-3.mb-lg-0
              p.mb-0 Dependiendo de lo que se espera de la presencia web de una empresa, es como se define la estrategia más adecuada (Xie, 2019). Para campañas de lanzamiento o eventos de gran escala, se recomienda hacer uso del SEM; pero, si la idea es seguir creciendo y posicionar el sitio web, se considera más rentable aplicar SEO, puesto que resulta más económico y duradero en los motores de búsqueda.

          
          



</template>

<script>
export default {
  name: 'Tema3',
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
