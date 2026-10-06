<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 #[em Social media]
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        img(src="@/assets/curso/tema5/1.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text El #[em social media] es un fenómeno de interacción social que se ha convertido en la puerta de entrada para dar y recibir información a través de los medios digitales. Teniendo en cuenta la evidencia de la comunicación bidireccional generada, se podría afirmar, desde la perspectiva de Dotras (2018), que “el #[em social media] consiste en construir relaciones”, lo cual se ajusta muy bien a la realidad.
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/2.png", data-aos="zoom-in")
          .col-lg-8
            p Cada día se genera contenido informativo que circula con total normalidad a través de las distintas plataformas digitales, debido a la continua necesidad de los individuos por estar enterados de lo que sucede en el mundo o en pocos kilómetros a la redonda. Es así como el #[em social media] se compone de diversas plataformas que permiten el intercambio de información, siendo este un gran atractivo para las marcas, al ver el gran movimiento generado en el público consumidor, el cual da a conocer sus gustos, opiniones o puntos de vista con relación a determinado tema.

            .bg-color-2.tarjeta.p-4
              p.mb-0 Dentro del #[em social media], se evidencian distintos medios para generar interacción, enmarcados en la comunicación, la colaboración, la multimedia y el entretenimiento (Xie, 2019).
        
        div.bg-color-2.tarjeta.p-3.d-inline-block.mb-5
          h3.mb-0 Medios sociales

        .row.mb-5.align-items-center.justify-content-center
          .col-md-8.col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/3.png", data-aos="zoom-in")
          .col-lg-7
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-7")
              div(titulo="Comunicación")
                .row.justify-content-center.align-items-center.ms-lg-5
                  .col-lg-6.mb-3.mb-lg-0
                    ul.lista-ul--color
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        span <em>Blog</em> y <em>microblog.</em>
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        span <em>Crowd wisdom.</em>
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        span Plataformas de comentarios.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        span Foros en línea.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Redes sociales completas.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Plataformas de servicios.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Plataformas de comunicación interna.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Plataformas de curación de contenido.
                  .col-lg-6
                    ul.lista-ul--color
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Mensajería instantánea.
                    ul.lista-ul--color.bg-color-2.p-3
                      li.mb-3.d-flex
                        i.fas.fa-circle-check.bg-color-18
                        | RRSS por ubicación o geolocalización.
                      li.mb-3.d-flex
                        i.fas.fa-circle-check.bg-color-18
                        | RRSS por nicho.
                      li.mb-3.d-flex
                        i.fas.fa-circle-check.bg-color-18
                        | RRSS por negocio.
                      li.mb-3.d-flex
                        i.fas.fa-circle-check.bg-color-18
                        | RRSS de video.
                      li.mb-3.d-flex
                        i.fas.fa-circle-check.bg-color-18
                        | RRSS de fotos.
                      li.mb-3.d-flex
                        i.fas.fa-circle-check.bg-color-18
                        | RRSS para compartir arte.
              div(titulo="Colaboración")
                .row.justify-content-center.align-items-center.ms-lg-5
                  .col-lg-3.order-2
                    img(src="@/assets/curso/tema5/4.svg")
                  .col-lg-9.order-1.mb-3.mb-lg-0
                    ul.lista-ul--color
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Preguntas y respuestas (Q&A) (<em>Questions and Answers</em>).
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Wiki.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Marcadores sociales.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Agregadores y publicadores de contenido en internet.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        p.mb-0 Sitios de opinión y <em>rating</em>.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Comercio y mercado social.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        span <em>Crowdfunding</em>.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Plataformas de movimiento social.
              div(titulo="Multimedia")
                .row.justify-content-center.align-items-center.ms-lg-5
                  .col-lg-3.order-2
                    img(src="@/assets/curso/tema5/5.svg")
                  .col-lg-9.order-1.mb-3.mb-lg-0
                    ul.lista-ul--color
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Compartir fotos.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Compartir contenido.  
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Plataformas de emisiones en vivo o en directo.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Compartir música.
              div(titulo="Entretenimiento")
                .row.justify-content-center.align-items-center.ms-lg-5
                  .col-lg-3.order-2
                    img(src="@/assets/curso/tema5/6.png")
                  .col-lg-9.order-1.mb-3.mb-lg-0
                    ul.lista-ul--color
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Plataformas de eventos.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Mundos virtuales.
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                        | Juegos en línea.

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Redes sociales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/7.png", data-aos="zoom-in")
      .col-lg-5
        .bg-color-9.p-5
          p.mb-0 La interacción es la premisa principal de las redes sociales, las cuales se definen como estructuras sociales que, como su nombre lo indica, atrapan a individuos con relación a un tema en común. Estas tienen como objetivo la conexión social a nivel global, lo que implica traspasar barreras de espacio y tiempo, para llevar a cabo procesos efectivos de comunicación.
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/8.png", data-aos="zoom-in")
    
    .bg-color-sintesis.p-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          img.d-lg-flex.d-none(src="@/assets/curso/tema5/9.svg").mx-auto
        .col-lg
          p.mb-0 Las redes sociales han evidenciado una gran necesidad del ser humano de mostrar una parte de la vida real a través de plataformas digitales, las cuales tienen una connotación positiva o negativa, de acuerdo con el contexto en que se utilizan detrás de la pantalla de un computador o de un dispositivo móvil; pero, en cuanto a las marcas, el surgimiento y posicionamiento de las redes sociales ha significado una increíble oportunidad para llevar a cabo procesos de promoción y venta de productos o servicios, puesto que es aquí donde se encuentra la gran mayoría de la población del mundo, por no decir que toda. Lo importante es definir qué funciona, qué se desea lograr y cómo se van a generar los resultados deseados, además de poner especial atención al sentir de los consumidores, que encuentran las redes sociales como los medios perfectos para expresar su inconformidad o demostrar empatía con la marca.
    
    

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bg-color-8.p-4.mb-5
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-lg-flex.d-none(src="@/assets/curso/tema5/10.svg").mx-auto
            .col-lg
              p.mb-0 En la medida en que existen distintas maneras de comunicación a través del planeta, existen diferentes tipos de redes sociales, que se pueden clasificar en horizontales y verticales (Xie, 2019).
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 3.
              span Tipos de redes sociales
            img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema5/11.svg", alt="La figura describe la clasificación de las redes sociales en verticales y horizontales. Las redes sociales verticales se especializan en temas o intereses específicos, como ámbitos profesionales, educativos, de ocio y de contenidos. Entre sus temáticas se encuentran los videojuegos, los animales, la lectura, los viajes, la comida y el deporte, así como el intercambio de documentos, videos, imágenes, música y otros contenidos. Las redes sociales horizontales se presentan como una categoría general sin una temática específica.")
            img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema5/11-1.svg", alt="La figura describe la clasificación de las redes sociales en verticales y horizontales. Las redes sociales verticales se especializan en temas o intereses específicos, como ámbitos profesionales, educativos, de ocio y de contenidos. Entre sus temáticas se encuentran los videojuegos, los animales, la lectura, los viajes, la comida y el deporte, así como el intercambio de documentos, videos, imágenes, música y otros contenidos. Las redes sociales horizontales se presentan como una categoría general sin una temática específica.")
            figcaption Nota. Adaptada de Xie (2019). #[em Marketing] digital: Navegando en aguas digitales, sumérgete conmigo.
        
        .cajon.color-acento-contenido.bg-color-9.p-4
          p.mb-0 Entre las redes sociales más populares, se encuentran Facebook, Instagram, Twitter, Youtube, Tik Tok, Linkedin, Pinterest, entre otras.
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Contenidos para redes sociales
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/12.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0(data-aos="fade-right") Para que una red social genere interés, debe partir de la generación de contenidos de valor para la audiencia que recibe la información. Dichos contenidos pueden variar dependiendo del tipo de publicaciones que permita cada red social en su <em>feed</em>, o vista de contenidos. Es de resaltar que todo contenido que se publique debe ir acompañado de su respectivo <em>copy</em>, o texto descriptivo, el cual complementa la información que se desea compartir. Existen diez (10) tipos de contenidos visuales que se deben publicar en las redes sociales, como se detalla a continuación:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/13.png", data-aos="zoom-in")
      .col-lg-8
        SlyderF(columnas="col-lg-6 col-xl-6").mb-5
          .tarjeta.bg-color-sintesis.p-4.box-shadow
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/tema5/14.svg', alt='')
      
            h3.bg-color-9.p-3.mb-4.text-center Imágenes
            p.text-center Este contenido sitúa en un contexto preciso la información que se desea comunicar, además de definir una identidad y estética acorde con la marca. Puede contener una fotografía y un texto.

          .tarjeta.bg-color-sintesis.p-4.box-shadow
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/tema5/15.svg', alt='')
      
            h3.bg-color-9.p-3.mb-4.text-center Videos
            p.text-center Este contenido es aún más apetecido, al conectar la imagen en movimiento con el sonido y la creatividad, para entregar un mensaje claro, teniendo en cuenta determinado objetivo.

          .tarjeta.bg-color-sintesis.p-4.box-shadow
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/tema5/16.svg', alt='')
      
            h3.bg-color-9.p-3.mb-4.text-center Gráficos
            p.text-center Contenido informativo para entregar datos precisos en torno a determinado tema.

          .tarjeta.bg-color-sintesis.p-4.box-shadow
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/tema5/17.svg', alt='')
      
            h3.bg-color-9.p-3.mb-4.text-center <em>GIFs</em>
            p.text-center Formato de video de mínima duración para complementar un mensaje.

          .tarjeta.bg-color-sintesis.p-4.box-shadow
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/tema5/18.svg', alt='')
      
            h3.bg-color-9.p-3.mb-4.text-center Memes
            p.text-center Imágenes divertidas con gran facilidad para viralizarse haciendo referencia a un sinfín de temas.

          .tarjeta.bg-color-sintesis.p-4.box-shadow
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/tema5/19.svg', alt='')
      
            h3.bg-color-9.p-3.mb-4.text-center <em>Webinars</em>
            p.text-center Espacios de transmisión en vivo, diseñados para compartir información e impartir educación respecto a un tema.

          .tarjeta.bg-color-sintesis.p-4.box-shadow
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/tema5/20.svg', alt='')
      
            h3.bg-color-9.p-3.mb-4.text-center Capturas
            p.text-center Imágenes compartidas de publicaciones previas realizadas por otros usuarios. También se define así a la fotografía de una imagen en una computadora o dispositivo móvil.

          .tarjeta.bg-color-sintesis.p-4.box-shadow
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/tema5/21.svg', alt='')
      
            h3.bg-color-9.p-3.mb-4.text-center Infografías
            p.text-center Estructuras informativas que hacen uso de imágenes y texto breve para dar a conocer un tema determinado.

          .tarjeta.bg-color-sintesis.p-4.box-shadow
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/tema5/22.svg', alt='')
      
            h3.bg-color-9.p-3.mb-4.text-center Dibujos
            p.text-center Imágenes ilustrativas de determinado tema.
          
          .tarjeta.bg-color-sintesis.p-4.box-shadow
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/tema5/23.svg', alt='')
      
            h3.bg-color-9.p-3.mb-4.text-center <em>E-books</em>
            p.text-center Libros digitales que pueden ser de acceso abierto o pago.

    .cajon.color-secundario.bg-color-3.p-4
      p.mb-0 Luego de definir los tipos de contenidos que serán usados en las redes sociales elegidas, se procede a generar una parrilla de programación, la cual permite ubicar los días y horarios en que se realizarán las publicaciones. Para ello, existen una serie de herramientas, dentro y fuera de las redes sociales, que permiten programar los contenidos con el fin de optimizar tiempo.

    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Analítica de redes sociales
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/24.png", data-aos="zoom-in")
      .col-lg-8
        p La analítica, o el análisis, de redes sociales se enfoca en la recopilación de datos de las campañas desarrolladas en redes sociales, los cuales se usarán para realizar un seguimiento al rendimiento de la estrategia definida, ver qué funciona y qué se debe mejorar (Newberry, 2020). Por ello, la gran ventaja que ofrece el mundo digital es que, en su gran mayoría, todo se puede medir, y estos resultados constituyen la información más importante que podemos adquirir. Por algo dicen que “el conocimiento es poder”.
        .bg-color-2.tarjeta.p-4
          p.mb-0 Para realizar esta medición existen diversas herramientas en línea, como Hootsuite Analytics, Google Analytics, Brandwatch, Talkwalker, etc.

    separador
    
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Marco legal de las redes sociales
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/25.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 De acuerdo con el portal web En TIC Confío (2015), en Colombia, el Ministerio de las TIC es el ente encargado de regular la actividad digital, y aunque no hay una normativa específica para <em>social media</em>, sí existen leyes que protegen la información y los datos personales, así como las tecnologías de la información y la comunicación en general. Es de resaltar que, en cuanto a las redes sociales, se puede acudir al Artículo 15 de la Constitución Nacional, que hace referencia al derecho a la intimidad personal y familiar y al buen nombre. Además, el Gobierno ha trabajado por la implementación de mecanismos jurídicos como la Ley 1273 de 2009, que modificó el Código Penal y donde se incluyen delitos digitales relacionados con la comprobación del acceso ilegal al perfil de otra persona o la violación de datos personales. Igualmente, la difamación por cualquier red social o la creación de sitios web fraudulentos, al sustentarse con las debidas pruebas, pueden ser castigados.
    
    separador
    
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Derechos de autor de contenidos digitales
    
    img(src="@/assets/curso/tema5/26.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text La eclosión de la revolución en el ámbito de las tecnologías de la información y las comunicaciones ha generado, a su vez, una revolución digital con innumerables ventajas. Sin embargo, el acceso masivo a la información y a contenidos digitales plantea serios problemas con respecto a los derechos de la propiedad intelectual, debido al acceso incontrolado y, en cierto sentido, ilimitado, creando incluso una sensación de no prohibición en la red. En este escenario, se hacen necesarias acciones jurídicas para proteger el derecho intelectual y, por esto, es importante revisar algunos conceptos.
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/27.png", data-aos="zoom-in")
          .col-lg-8
            .cajon.color-acento-contenido.bg-color-9.p-4
              p.mb-0 El concepto de propiedad intelectual (PI) “se refiere a las creaciones del intelecto: desde las obras de arte hasta las invenciones, los programas informáticos, las marcas y otros signos comerciales” (OMPI, 2020). De esta manera, se podría decir que la propiedad intelectual significa talento propio. Y allí entra en juego el derecho de autor, que comprende las facultades morales y de explotación que deberían ser reconocidas a una persona por su obra original. Los contenidos como fotos, gráficos, videos y diseños, son objeto de derechos de propiedad intelectual y se extienden a los entornos digitales donde se puede expresar el intelecto humano con sus creaciones.
        
        separador
        
        #t_5_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.6 Normatividad colombiana
        
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/28.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-0(data-aos="fade-right") Por lo anterior, las plataformas tienen dentro de los términos y condiciones de uso un apartado que bien podría entenderse como un contrato de adhesión, que es aceptado desde el momento en que se abre una cuenta como nuevo usuario. En este sentido, es importante identificar, a continuación, la normatividad colombiana que regula las identidades en la web y la propiedad intelectual. Adelante.

        .row.mb-5.justify-content-center.align-items-center
          .col-md-8.col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema5/29.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            TabsA.color-acento-botones
              .tarjeta.color-acento-botones--borde.p-4(titulo="Ley 23 de 1982")
                h4 Ley 23 de 1982
                p Ley de derechos de autor. Para más información, explore el siguiente enlace: 
                a.anexo.bg-color-19(href="https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=3431&dt=S" target="_blank")
                  h5.mb-0.text-center Clic aquí
              .tarjeta.color-acento-botones--borde.p-4(titulo="Decisión Andina 351 de 1993")
                h4 Decisión Andina 351 de 1993
                p Cuya finalidad es reconocer una adecuada y efectiva protección a los autores y demás titulares de derechos, sobre las obras del ingenio, en el campo literario, artístico o científico, cualquiera que sea el género o forma de expresión y sin importar el mérito literario o artístico ni su destino. Para más información, explore el siguiente enlace:
                a.anexo.bg-color-19(href="https://www.wipo.int/wipolex/es/legislation/details/9445" target="_blank")
                  h5.mb-0.text-center Clic aquí
              .tarjeta.color-acento-botones--borde.p-4(titulo="Proyecto de Ley 241 de 2011")
                h4 Proyecto de Ley 241 de 2011
                p Por la cual se regula la responsabilidad por las infracciones de derecho de autor y derechos conexos en internet. Para más información explore el siguiente enlace:
                a.anexo.bg-color-19(href="http://www.informatica-juridica.com/proyecto-de-ley/proyecto-ley-241-derecho-autor-los-derechos-conexos-internet/" target="_blank")
                  h5.mb-0.text-center Clic aquí
              .tarjeta.color-acento-botones--borde.p-4(titulo="Ley 1834 del 2017")
                h4 Ley 1834 del 2017
                p Por la cual se fomenta la economía creativa (Ley Naranja). Para más información, explore el siguiente enlace:
                a.anexo.bg-color-19(href="http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30030647" target="_blank")
                  h5.mb-0.text-center Clic aquí
              .tarjeta.color-acento-botones--borde.p-4(titulo="Ley 1915 del 2018")
                h4 Ley 1915 del 2018
                p Por la cual se modifica la Ley 23 de 1982 y se establecen otras disposiciones en materia de derecho de autor y derechos conexos. Para más información, explore el siguiente enlace: 
                a.anexo.bg-color-19(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=87419" target="_blank")
                  h5.mb-0.text-center Clic aquí






    





</template>

<script>
export default {
  name: 'Tema5',
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
