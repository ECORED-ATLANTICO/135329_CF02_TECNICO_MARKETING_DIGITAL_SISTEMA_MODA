<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos del #[em marketing] digital
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.bg-color-1
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para hablar de #[em marketing] digital, primero es importante hacer una breve exploración del #[em marketing] como tal, el cual, según la American Marketing Association (AMA), “es una función de la organización y un conjunto de procesos para crear, comunicar y entregar valor a los clientes, y para manejar las relaciones con estos últimos, de manera que beneficien a toda la organización […]” (American Marketing Association, s.f. cómo se citó en Iván Thompson, 2006).  De esta forma, se entiende que el #[em marketing] da respuesta a muchas necesidades de los consumidores y, a partir de esto, permite generar nuevos mercados, estableciendo ofertas de valor a través de la comunicación, el servicio al cliente y demás conexiones que surgen según el comportamiento del público, y teniendo en cuenta que el enfoque máximo de este son las personas.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-5.mb-3
                figure
                  img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
              .col-lg-7
                .bg-color-9.px-5.py-4
                  p.mb-0 A lo largo de la historia, el <em>marketing</em> se desenvolvió en diferentes fases que marcaron una ruta para su desarrollo, iniciando con los primeros tiempos de la humanidad, en la etapa de la autosuficiencia económica, donde no existía el <em>marketing</em> como tal. Se da a continuación una etapa de trueque, donde se empieza a vislumbrar el paso a seguir para los mercados locales, en un primer acercamiento a la comercialización. Seguido de esto, aparece la moneda, que agiliza diversos procesos; lo que da paso a la etapa de la Revolución Industrial y, a su vez, a la producción en masa. 
            div.bg-color-sintesis.p-4
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img.d-lg-flex.d-none(src="@/assets/curso/tema2/4.svg").mx-auto
                .col-lg
                  p.mb-0 De esta manera, tienen lugar importantes sucesos, como las guerras mundiales, luego de los cuales se genera un increíble desarrollo de los medios publicitarios, seguido de la creación del computador y la adaptación de nuevos sistemas de #[em marketing], de acuerdo con los nuevos tiempos y las necesidades que surgen con estos (SENA, 1989).

        div.bg-color-5.tarjeta.p-4.mb-5
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-2
              img.d-lg-flex.d-none(src="@/assets/curso/tema2/5.png").mx-auto
            .col-lg.order-1.mb-3.mb-lg-0
              p.mb-0 A partir del gran avance que ha tenido la tecnología y el importante impacto generado, surge el #[em marketing] digital como uno de los tipos de #[em marketing], y comienza a aplicarse desde los años 90, con la gran diferencia de desarrollarse en el entorno digital, utilizando todo tipo de herramientas y plataformas que este provee. Según Cibrián (2018), el gran #[em plus] que posee este es la capacidad de medir todo lo que sea necesario, además de generar mayor trascendencia y alcance. Aquí es donde se determina el gran poder que posee la información, sobre todo en un mercado tan competitivo como el que se vive en la actualidad.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Breve historia del #[em marketing] digital
    
    img(src="@/assets/curso/tema2/6.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text El <em>marketing</em> digital ha tenido un gran desarrollo a medida que han evolucionado los medios de comunicación a lo largo de los últimos 40 años.
    
    .bg-full-width.bg-fondo-2
      .p-4.p-lg-5
        PasosB.color-acento-contenido.bg-color-white.tarjeta.p-4
          .row(titulo="1440 - 1900 ").p-lg-4.align-items-center
            .col-lg-8.mb-4.mb-lg-0.order-lg-2
              h5 1440 - 1900 Aparece la publicidad impresa
              p.mb-0 En 1440 se inventa la imprenta y con ella aparecen los medios impresos que en este periodo de tiempo permitieron por primera vez la difusión masiva de textos, como la revista o el periódico. Esto permitió la creación de posters y afiches para la promoción de las empresas del momento.
            .col-lg-4.order-lg-1
              figure
                img(src='@/assets/curso/tema2/8.png', alt='')
          .row(titulo="1920 - 1949").p-lg-4.align-items-center
            .col-lg-8.mb-4.mb-lg-0.order-lg-2
              h5 1920 - 1949 La emergencia de los nuevos medios
              p.mb-0 Con la llegada de la radio y su progresiva difusión en los hogares, se da origen a este importante medio. Igualmente, surge la publicidad televisiva y el teléfono empieza a tener gran presencia en las familias de la época.
            .col-lg-4.order-lg-1
              figure
                img(src='@/assets/curso/tema2/7.png', alt='')
          .row(titulo="1950 - 1972").p-lg-4.align-items-center
            .col-lg-8.mb-4.mb-lg-0.order-lg-2
              h5 1950 - 1972 El #[em marketing] florece
              p En este periodo, se evidencia que los ingresos de la publicidad televisiva superan a los medios impresos o radiales, lo que permite un crecimiento de la inversión en el medio audiovisual y emerge el <em>telemarketing</em>.
              p.mb-0 En 1970, se pronuncia por primera vez la palabra internet; a su vez, se crea el primer programa para enviar un correo electrónico y se evidencia una caída en los medios impresos. Del mismo modo, se funda Microsoft y se crean los emoticones.
            .col-lg-4.order-lg-1
              figure
                img(src='@/assets/curso/tema2/9.png', alt='')
          .row(titulo="1973 - 1994").p-lg-4.align-items-center
            .col-lg-8.mb-4.mb-lg-0.order-lg-2
              h5 1973 - 1994 Emerge la era digital
              p Aparecen las empresas que conocemos hasta el día de hoy. Motorola genera la primera llamada por teléfono móvil, IBM lanza su primer ordenador personal y Apple presenta su Macintosh en un comercial del #[em Superbowl].
              p.mb-0 En este tiempo, se producen importantes avances en la tecnología 2G y se menciona por primera vez el #[em marketing] digital, dado que se crea la primera página web y se presenta de forma pública la #[em World Wide Web] (www); además, se da a conocer el primer buscador web y se evidencia una combinación de publicidad televisiva en los medios impresos.
            .col-lg-4.order-lg-1
              figure
                img(src='@/assets/curso/tema2/10.png', alt='')
          .row(titulo="1995 - 2002").p-lg-4.align-items-center
            .col-lg-8.mb-4.mb-lg-0.order-lg-2
              h5 1995 - 2002 La burbuja.com
              p.mb-0 El GPS (Sistema de Posicionamiento Global) puede ser usado en modo civil; se crean las primeras <em>e-commerce</em>, como Amazon y Netscape; surge por primera vez el concepto de SEO (<em>Search Engine Optimization</em>) y se crea el primer <em>blog</em>. Además, en este tiempo aparece la primera red social, llamada SixDegrees. En 1998, nace Google; igualmente, el popular MSN Messenger y también se crea Google Analytics.
            .col-lg-4.order-lg-1
              figure
                img(src='@/assets/curso/tema2/11.png', alt='')
          .row(titulo="2003 - Actualidad").p-lg-4.align-items-center
            .col-lg-8.mb-4.mb-lg-0.order-lg-2
              h5 2003 - Actualidad: la era del #[em marketing] digital
              p.mb-0 En el año 2003, llegan a reinar las redes sociales en todo su esplendor. Algunas mantienen su fuerza y otras van decayendo. Igualmente, se actualizan los algoritmos y se entiende que esta es la era para mantener al mundo hiperconectado, consumiendo contenidos y al mismo tiempo creándolos.
            .col-lg-4.order-lg-1
              figure
                img(src='@/assets/curso/tema2/12.png', alt='')
              
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Las 4C del #[em marketing] digital
    
    .bg-full-width.bg-fondo-1
      .p-4.p-lg-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.bg-color-1.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/13.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 También conocidas como el #[em marketing mix], donde se distinguen cuatro importantes aspectos a tener en cuenta para entender y desplegar una estrategia: consumidor, costo, conveniencia y comunicación. Este modelo fue propuesto por Robert F. Lauterborn, en 1990, quien vio la necesidad de actualizar al entorno digital el modelo del <em>marketing</em> tradicional de 4P (producto, precio, plaza y promoción), sin perder su esencia (Xie, 2019). En el siguiente gráfico, se aprecian las definiciones.

        .row.justify-content-center.align-items-center.mb-5
          .col-md-10.col-lg-6
            ImagenInfografica.color-acento-botones
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/14.svg', alt='')

              .tarjeta.bg-color-10.p-3.position.relative(x="14%" y="25%" numero="")
                .row.justify-content-center.align-items-center.mb-3
                  .col-md-auto
                    figure
                      img.d-none.d-md-block(src='@/assets/curso/tema2/21.svg', alt='')
                  .col-md
                    .h5.mb-2 Consumidor
                    p.mb-0 Todas las estrategias para promocionar y vender un producto se basan en los gustos, deseos y necesidades de los consumidores; por ello, el #[em marketing] digital está tan enfocado en conocer y analizar su público a través de diversas técnicas para lograr efectividad en sus procesos.
                img.position-absolute.pst-1(src='@/assets/curso/tema2/25.svg', style="max-width: 72px" alt='')

              .tarjeta.bg-color-11.p-3(x="86%" y="25%" numero="")
                .row.justify-content-center.align-items-center.mb-3
                  .col-md-auto
                    figure
                      img.d-none.d-md-block(src='@/assets/curso/tema2/22.svg', alt='')
                  .col-md
                    .h5.mb-2 Costo
                    p.mb-0 Este se entiende como el precio a pagar por un bien o servicio, el cual puede depender de distintos factores, como la producción, la calidad o el poder adquisitivo del público objetivo. Esta información será usada por el consumidor para decidir si adquiere o no dicho elemento.
                img.position-absolute.pst-1(src='@/assets/curso/tema2/26.svg', style="max-width: 72px" alt='')

              .tarjeta.bg-color-12.p-3(x="14%" y="65%" numero="")
                .row.justify-content-center.align-items-center.mb-3
                  .col-md-auto
                    figure
                      img.d-none.d-md-block(src='@/assets/curso/tema2/23.svg', alt='')
                  .col-md
                    .h5.mb-2 Conveniencia
                    p.mb-0 Supone el proceso de compra, teniendo en cuenta el servicio al cliente, la comodidad del consumidor y la claridad de la información del producto o servicio que va a adquirir; lo que permite fidelizar a un público.
                img.position-absolute.pst-1(src='@/assets/curso/tema2/27.svg', style="max-width: 72px" alt='')

              .tarjeta.bg-color-13.p-3(x="86%" y="65%" numero="")
                .row.justify-content-center.align-items-center.mb-3
                  .col-md-auto
                    figure
                      img.d-none.d-md-block(src='@/assets/curso/tema2/24.svg', alt='')
                  .col-md
                    .h5.mb-2 Comunicación
                    p.mb-0 Los procesos comunicativos dentro del #[em marketing] digital juegan un papel muy importante. Estos pueden definir la personalidad, interacción y conexión de la marca con su público. Además, permiten realizar una entrega de información coherente que logre una capitalización del tiempo invertido en lograr estos lazos de unión.
                img.position-absolute.pst-1(src='@/assets/curso/tema2/28.svg', style="max-width: 72px" alt='')

        separador
        
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.3 Herramientas del #[em marketing] digital
        
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-right") Dentro del #[em marketing] digital, es posible identificar las principales herramientas para llevar a cabo las estrategias que se propongan para el posicionamiento de una empresa o marca. Es de destacar que estas se mantienen en constante evolución y es viable encontrar otras que faciliten los objetivos a alcanzar.
            p.mb-0 De acuerdo con De Castro (2019), se podrían identificar las siguientes herramientas:
    
    TabsC.color-acento-botones(data-aos="zoom-in").mb-5
      .p-3.p-md-4(titulo="<em>Blog</em>")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            p Permite generar mayor captación del interés del público objetivo, con contenidos frescos, como imágenes, textos de opinión, videos o pódcasts; lo cual ofrece mejor posicionamiento en los motores de búsqueda.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/16.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="<em>E-mail marketing</em>")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            p Se define como una estrategia de comunicaciones que entrega una información puntual de contenido promocional de productos o servicios por medio del correo electrónico. Esto favorece la fidelización del público objetivo y la captación de nuevos usuarios con la ayuda de bases de datos especializadas.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/17.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="<em>Social media</em>")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            p Este radica en las redes sociales, que, como su nombre lo indica, son redes que atrapan usuarios en torno a una empresa o marca definida. Lo que se espera de esto es generar y mantener una comunidad que interactúa al compartir contenido y experiencias que surgen a partir de lo que se promociona.
            p Según los intereses de la marca y el comportamiento del público objetivo, es como se eligen las redes sociales adecuadas.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/18.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Posicionamiento en motores de búsqueda")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            p Al hablar de posicionamiento en motores de búsqueda, se hace referencia al SEO (<em>Search Engine Optimization</em>). Este permite que la marca o empresa aparezca en el motor de búsqueda al momento en que un usuario utilice palabras relacionadas con esta, lo cual genera un mayor flujo de tráfico al sitio web. Aquí es muy importante la definición de palabras clave que se relacionen con la página web en cuestión.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/19.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Publicidad <em>online</em>")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            p Es el pago de publicidad digital por medio de las distintas plataformas que la empresa o marca necesite para potenciar el mensaje con el público que desea alcanzar, lo que se traduce como una buena forma de darse a conocer y captar nuevos usuarios. Esto significa que, además de los contenidos publicitarios orgánicos que generan atención, el pago de pauta digital llega al público deseado a partir de una adecuada segmentación.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/20.png', alt='Imagen de acompañamiento')




</template>

<script>
export default {
  name: 'Tema2',
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
