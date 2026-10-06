<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Verificación conceptual del <em>marketing</em> digital.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión del aprendiz sobre los fundamentos del <em>marketing</em> digital mediante la resolución de preguntas de verdadero o falso, a partir de la identificación de conceptos clave desarrollados en el componente formativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué caracteriza principalmente un entorno digital contemporáneo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Espacio tecnológico que facilita interacción, comunicación e intercambio de información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Conjunto exclusivo de equipos destinados a procesos industriales tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sistema utilizado únicamente para almacenar información empresarial interna.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Herramienta orientada exclusivamente al entretenimiento digital de usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué favorecen las tecnologías digitales en la sociedad actual?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir permanentemente la comunicación entre organizaciones y consumidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar conexión, acceso al conocimiento y transformación de procesos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar el intercambio de información mediante plataformas digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente las relaciones sociales por procesos automatizados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué describe el concepto de convergencia digital?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Separación de medios tradicionales y plataformas tecnológicas independientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustitución definitiva de medios impresos por redes sociales actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Integración de diferentes medios hacia objetivos comunes de comunicación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminación progresiva de tecnologías utilizadas por organizaciones modernas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál ventaja ofrecen los medios propios para las organizaciones?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir presencia digital frente a consumidores potenciales actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar producción de contenidos desarrollados por la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente estrategias digitales implementadas por la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Construir identidad digital mediante canales controlados por la marca.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué ejemplos corresponden a medios propios digitales?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sitios web, blogs, aplicaciones móviles y micrositios corporativos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Periódicos impresos administrados por organizaciones gubernamentales exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Programas radiales emitidos únicamente por cadenas nacionales comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Espacios televisivos contratados mediante pauta publicitaria tradicional permanente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué objetivo persigue el SEO dentro de los medios propios digitales?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar posicionamiento orgánico en motores de búsqueda actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejorar visibilidad orgánica mediante optimización para buscadores web.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir contenidos publicados por campañas publicitarias pagadas exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir tráfico generado hacia sitios institucionales de organizaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué importancia tienen los contenidos dentro de los medios propios digitales?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permiten atraer usuarios mediante información útil y relevante.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminan interacción entre organizaciones y públicos objetivo actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituyen completamente estrategias digitales de posicionamiento empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducen capacidad comunicativa desarrollada mediante plataformas digitales actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué función cumplen las aplicaciones móviles en entornos digitales?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir acceso permanente a servicios ofrecidos por organizaciones actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar comunicación entre empresas y consumidores mediante dispositivos móviles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Facilitar acceso, interacción y prestación de servicios digitales especializados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente páginas web desarrolladas por las organizaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué beneficio aporta una estrategia digital basada en contenidos?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Disminuir visibilidad de la organización frente al mercado objetivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Favorecer posicionamiento, interacción y generación de confianza con usuarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir investigación comercial mediante publicaciones digitales frecuentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar diferenciación competitiva dentro de los mercados digitales contemporáneos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué integra principalmente un ecosistema digital organizacional?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente redes sociales administradas por la organización comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Exclusivamente plataformas tecnológicas destinadas al comercio electrónico empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Canales, contenidos, tecnologías y usuarios conectados estratégicamente entre sí.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Solamente aplicaciones móviles utilizadas para atención al cliente digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué caracteriza una estrategia efectiva de contenidos digitales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Publicar información sin objetivos definidos ni audiencia específica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Planificar contenidos alineados con objetivos y necesidades del público.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente la comunicación institucional por publicidad pagada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar procesos de evaluación sobre los resultados de las publicaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué función cumplen los micrositios dentro de las estrategias digitales organizacionales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Apoyar campañas específicas mediante contenidos y objetivos particulares.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar páginas institucionales utilizadas por las organizaciones modernas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente aplicaciones móviles dentro de los ecosistemas digitales actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir interacción entre usuarios y plataformas digitales empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué favorece una adecuada arquitectura de contenidos digitales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar organización de información publicada en plataformas digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar navegación, acceso y experiencia del usuario digital.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente estrategias de posicionamiento orgánico empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir disponibilidad de contenidos relevantes para los usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué propósito tiene optimizar contenidos para motores de búsqueda?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir presencia digital de organizaciones frente a usuarios potenciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir campañas digitales mediante publicaciones sin planificación estratégica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar accesibilidad de contenidos publicados en plataformas institucionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incrementar visibilidad y tráfico orgánico hacia los canales digitales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué beneficio ofrecen los blogs dentro de las estrategias de comunicación digital?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Generar contenidos especializados fortaleciendo autoridad y posicionamiento institucional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar interacción entre organizaciones y comunidades digitales existentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente sitios web corporativos utilizados actualmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir disponibilidad de información relevante para los consumidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué fortalece la integración de canales digitales organizacionales?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir coherencia entre contenidos publicados por la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Favorecer experiencias consistentes durante la interacción con los usuarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar estrategias omnicanal implementadas por empresas competitivas actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir procesos de comunicación mediante acciones aisladas permanentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué permite evaluar la analítica dentro de los ecosistemas digitales empresariales?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar procesos de medición utilizados por las organizaciones modernas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir información disponible sobre el comportamiento de usuarios digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Medir resultados para optimizar decisiones estratégicas de comunicación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir indicadores mediante apreciaciones subjetivas del equipo comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué aporta la planificación digital al cumplimiento de objetivos organizacionales?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir procesos estratégicos mediante acciones digitales improvisadas permanentemente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar coordinación entre canales utilizados por la organización actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir capacidad de respuesta frente a las necesidades del mercado digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Organizar acciones coherentes orientadas al logro de resultados esperados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué relación existe entre los contenidos y el posicionamiento digital organizacional?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contenidos relevantes fortalecen el reconocimiento y presencia digital sostenible.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Los contenidos eliminan la necesidad de estrategias SEO organizacionales actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El posicionamiento depende únicamente de campañas publicitarias pagadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los contenidos reducen la interacción entre organizaciones y consumidores digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué objetivo persigue un ecosistema digital bien estructurado?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar integración entre tecnologías utilizadas por las organizaciones actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar experiencias digitales eficientes para usuarios y organizaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir procesos comerciales mediante herramientas tecnológicas independientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir oportunidades de interacción dentro de canales digitales institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
