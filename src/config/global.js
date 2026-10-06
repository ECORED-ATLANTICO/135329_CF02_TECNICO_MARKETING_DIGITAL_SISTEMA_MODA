export default {
  global: {
    Name: '<em>Marketing</em> digital',
    Description:
      'Con la llegada de las nuevas tecnologías, el internet ha tenido un gran impacto en todos los aspectos de la vida cotidiana, lo que ha permitido adaptarnos a escenarios desconocidos en una nueva era donde priman los entornos digitales y, en el contexto empresarial, estos aparecen idóneos para el <em>marketing</em> digital, reuniendo una serie de elementos y estrategias para lograr los objetivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conoce el entorno digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Componentes del entorno digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Plataformas digitales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos del <em>marketing</em> digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Breve historia del <em>marketing</em> digital',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Las 4C del <em>marketing</em> digital',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Herramientas del <em>marketing</em> digital',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diferencia entre SEO y SEM. ¿Cómo definir su uso?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estrategia digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de estrategias',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Plan de <em>marketing</em> digital',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: '<em>Social media</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Redes sociales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Contenidos para redes sociales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Analítica de redes sociales',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Marco legal de las redes sociales',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Derechos de autor de contenidos digitales',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Normatividad colombiana',
            hash: 't_5_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/124108_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alcance',
      significado: 'Determinar hasta qué punto se puede llegar.',
    },
    {
      termino: '<em>Banners</em>',
      significado: 'Formato publicitario en internet.',
    },
    {
      termino: '<em>Business</em>',
      significado: 'Traducción al inglés de ‘negocio’.',
    },
    {
      termino: '<em>Consumer</em>',
      significado: 'Traducción al inglés de ‘consumidor’.',
    },
    {
      termino: 'Fidelización de clientes',
      significado:
        'Proceso para retener consumidores, con el objetivo de que se conviertan en clientes habituales.',
    },
    {
      termino: 'Intrusivo',
      significado: 'Que se impone sin autorización.',
    },
    {
      termino: '<em>Jingle</em>',
      significado:
        'Canción publicitaria para promocionar un producto o servicio.',
    },
    {
      termino: 'KPI (<em>Key Performance Indicators</em>)',
      significado:
        'Indicadores clave de desempeño para el despliegue de una estrategia de <em>marketing</em>.',
    },
    {
      termino: 'Sitio web',
      significado: 'Conjunto de archivos digitales referentes a un tema.',
    },
    {
      termino: 'Tráfico de usuarios',
      significado: 'flujo o cantidad de usuarios que visitan una página web.',
    },
  ],
  referencias: [
    {
      referencia:
        'Adventures Digital Agency. (Septiembre de 2018). <em>Ante todo, definamos términos: ¿Qué es el entorno digital?</em> ResearchGate',
      link:
        'https://www.researchgate.net/publication/379381708_Ante_todo_definamos_terminos_Que_es_el_entorno_digital',
    },
    {
      referencia:
        'Boada, N. (Julio de 2009). <em>Los 8 pasos de un plan de marketing en redes sociales.</em> Cyberclick.',
      link:
        'https://www.cyberclick.es/numerical-blog/los-8-pasos-de-un-plan-de-marketing-en-redes-sociales',
    },
    {
      referencia:
        'Cibrián, I. (2018). <em>Marketing digital: Mide, analiza y mejora.</em> ESIC.',
    },
    {
      referencia:
        'Cyberclick Academy. (Abril de 2020). <em>¿Qué es el SEM o Search Engine Marketing?</em> (2021).',
      link: 'https://www.cyberclick.es/sem',
    },
    {
      referencia:
        'Decisión Andina 351 de 1993. {Comisión del Acuerdo de Cartagena}. <em>Régimen común sobre derecho de autor y derechos conexos.</em> Diciembre de 1993.',
      link: 'https://www.wipo.int/wipolex/es/legislation/details/9445',
    },
    {
      referencia:
        'De Castro, I. (Septiembre de 2019). <em>¿Qué son herramientas de marketing y por qué debo contar con ellas? Innovacode - Resolución de problemas.</em>',
    },
    {
      referencia:
        'De Paul, V. (Diciembre de 2020). <em>20 ideas de redes sociales para mantener el feed de tu marca al día. Sprout Social.</em>',
      link: 'https://sproutsocial.com/insights/ideas-de-redes-sociales/',
    },
    {
      referencia:
        'Dotras, A. (2018). <em>Social Media. Herramientas y estrategias empresariales.</em> Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Giraldo, V. (Febrero de 2019). <em>Plataformas digitales: ¿qué son y qué tipos existen?</em> Rock Content - ES.',
      link: 'https://rockcontent.com/es/blog/plataformas-digitales/',
    },
    {
      referencia:
        'Giu, W. (Julio de 2018). <em>Qué es una Estrategia Digital.</em> WalterGiu.',
      link: 'https://waltergiu.com/blog/que-es-una-estrategia-digital',
    },
    {
      referencia:
        'Laudon, K., y Laudon, J. (2012). <em>Sistemas de información gerencial.</em> Pearson.',
      link: 'https://es.calameo.com/read/0045399238b63175162a6',
    },
    {
      referencia:
        'Ley 23 de 1982. <em>Sobre derechos de autor.</em> Enero 28 de 1982.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=3431&dt=S',
    },
    {
      referencia:
        'Proyecto de Ley 241 del 2011. <em>Por la cual se regula la responsabilidad por las infracciones al derecho de autor y los derechos conexos en internet.</em> Abril de 2011.',
      link:
        'http://www.informatica-juridica.com/proyecto-de-ley/proyecto-ley-241-derecho-autor-los-derechos-conexos-internet/',
    },
    {
      referencia:
        'Ley 1834 del 2017. <em>Por medio de la cual se fomenta la economía creativa.</em> Mayo 23 de 2017.',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30030647',
    },
    {
      referencia:
        'Ley 1915 del 2018. <em>Por la cual se modifica la Ley 23 del 1982 y se establecen otras disposiciones en materia de derecho de autor y derechos conexos.</em> Julio de 2018.',
      link: '',
    },
    {
      referencia:
        'MES academy. (Octubre de 2017). <em>Tono de comunicación en entornos digitales</em> - Lección 10 [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=MIHtogevWZM&feature=youtu.be',
    },
    {
      referencia:
        'MinTIC. (Septiembre de 2015). <em>Redes sociales: Leyes para tener en cuenta.</em> En TIC confío.',
      link:
        'https://www.mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Preguntas-frecuentes/15261:En-TIC-Confio',
    },
    {
      referencia:
        'Newberry, C. (Julio de 2020). <em>Análisis de redes sociales: Una guía para principiantes. Social Media Marketing & Management Dashboard.</em>',
      link: 'https://blog.hootsuite.com/es/analisis-de-redes-sociales/',
    },
    {
      referencia: 'OMPI. (2020). <em>¿Qué es la propiedad intelectual?</em>',
      link: 'https://www.wipo.int/publications/es/details.jsp?id=4528',
    },
    {
      referencia:
        'Pérez, A. y Acosta, H. (2003). <em>La convergencia mediática: un nuevo escenario para la gestión de información.</em> Revista Cubana de Información en Ciencias de la Salud, 11(1).',
      link: '',
    },
    {
      referencia:
        'Pino, C. (2009). <em>El entorno digital en la nueva era de los medios y la publicidad: la metamorfosis del consumidor.</em> Razón y Palabra, (66).',
      link: 'https://www.redalyc.org/articulo.oa?id=199520908015',
    },
    {
      referencia: 'SENA, (1989). <em>Hablemos de marketing.</em> 11-13.',
      link: '',
    },
    {
      referencia:
        'Silva, R. (2009). <em>Beneficios del comercio electrónico.</em> Perspectivas, (24), 151-164.',
      link: 'https://www.redalyc.org/articulo.oa?id=425942160008',
    },
    {
      referencia:
        'Socialmood. (Marzo de 2020). <em>¿Qué es el SEO y por qué lo necesito?</em> 40deFiebre.',
      link: '',
    },
    {
      referencia:
        'Thompson, I. (Octubre de 2006). <em>Definición de Marketing. Portal de marketing - Marketing-free.com.</em>',
      link:
        'https://www.marketing-free.com/marketing/definicion-marketing.html',
    },
    {
      referencia:
        'Xie, Y. M. S. (2019). <em>Marketing digital: Navegando en aguas digitales, sumérgete conmigo.</em> Ediciones de la U.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Maria Camila Álvarez',
          cargo: 'Contratista diseño Curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Liliana Ceballos',
          cargo: 'Contratista diseño Curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Cristian Metaute Medina',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesus Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz Pinto',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Adriana Marcela Suarez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Angela Maldonado Jaime',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniela Bedoya Muñoz',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodriguez Rodriguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Caceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
