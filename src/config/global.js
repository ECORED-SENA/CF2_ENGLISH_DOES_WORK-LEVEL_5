export default {
  global: {
    componenteFormativo:
      '<span1><em>Would you forgive me?</em></span1><br><span>¿Me perdonarías?</span>',
    descripcionCurso:
      'En este componente, se presentan contenidos referidos al vocabulario empleado en actividades personales, sociales y laborales, así como el utilizado para indicar habilidades físicas, sociales y cognitivas en las personas, mediante el uso de los verbos modales: can, could, should, may y might. Asimismo, se identifican las funciones de estos verbos modales y se referencian las estructuras de oraciones afirmativas, negativas e interrogativas al emplear estos verbos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>Modal verbs</em> (Verbos modales)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Use of “can”</em> (Uso de <em>“can”</em>)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<em>Use of “could”</em> (Uso de <em>“could”</em>)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '<em>Use of “should”</em> (Uso de <em>“should”</em>)',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: '<em>Use of “may”</em> (Uso de <em>“may”</em>)',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: '<em>Use of “might”</em> (Uso de <em>“might”</em>)',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo:
              '<em>Requests and petitions</em> (Solicitudes y peticiones)',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo:
              '<em>Affirmative sentence structures using modal verbs</em> (Estructuras de oraciones afirmativas empleando verbos modales)',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo:
              '<em>Negative sentence structures using modal verbs</em> (Estructuras de oraciones negativas empleando verbos modales)',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo:
              '<em>Interrogative sentence structures using modal verbs</em> (Estructuras de oraciones interrogativas empleando verbos modales)',
            hash: 't_1_9',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Compound sentences</em> (Oraciones compuestas)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<em>Personal activities</em> (Actividades personales)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<em>Social activities</em> (Actividades sociales)',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '<em>Labor activities</em> (Actividades laborales)',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              '<em>Physical, social, and cognitive skills</em> (Habilidades físicas, sociales y cognitivas)',
            hash: 't_2_4',
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
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      tema: '<em>Modal verbs</em> (Verbos modales)',
      referencia:
        'Equipo académico. (2021). <em>Aprende fácilmente la definición y uso de los modal verbs del inglés</em>. British Council Colombia.',
      tipo: 'Artículo',
      link: 'https://www.britishcouncil.co/blog/aprende-ingles/modal-verbs',
    },
    {
      tema: '<em>Modal verbs</em> (Verbos modales)',
      referencia:
        'Web Inglés. (2020). <em>Los verbos modales en inglés</em>. Una explicación corta y concisa [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DtgHYsJ6bT8',
    },
    {
      tema: '<em>Modal verbs</em> (Verbos modales)',
      referencia:
        'Manzano, D [inglesamericano101]. (s. f.). <em>La mejor explicación de VERBOS MODALES EN INGLÉS con ejemplos del uso diario!</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8V7j4qRVVVA',
    },
  ],
  glosario: [
    {
      termino: '<em>Modal verbs</em> / Verbos modales',
      significado:
        'es un tipo de verbo auxiliar que puede utilizarse para expresar una opinión acerca de la probabilidad de ocurrencia de un evento, es decir, se señala si algo es probable o posible.',
    },
    {
      termino: '<em>Compound sentences</em> / Oraciones compuestas',
      significado:
        'una oración compuesta es aquella que incluye dos cláusulas que se encuentran unidas por una conjunción. Generalmente, se encuentra conformada por dos oraciones o cláusulas independientes.',
    },
    {
      termino: '<em>Personal activities</em> / Actividades personales',
      significado:
        'son actividades que tienen lugar a diario y se realizan de forma automática, enfocadas hacia el cuidado y mantenimiento del propio cuerpo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Babarro, N. (2021). <em>Habilidades sociales: qué son, tipos, listado y ejemplos</em>. Psicología-Online. ',
      link:
        'https://www.psicologia-online.com/habilidades-sociales-que-son-tipos-listado-y-ejemplos-4587.html#anchor_2',
    },
    {
      referencia:
        'González, A. y Sierra, N. (2008). <em>Retos y posibilidades de la enseñanza del inglés basada en contenidos en la educación superior: Visión de los docentes en una experiencia en Colombia</em>. Núcleo, 20(25), p. 125-148. ',
      link:
        'http://ve.scielo.org/scielo.php?script=sci_arttext&pid=S0798-97842008000100007&lng=es&tlng=es',
    },
    {
      referencia:
        'What’s Up!  (s. f.). <em>Usos de los verbos modales en inglés</em>. What’s Up! blog. ',
      link: 'https://whatsup.es/blog/usos-de-los-verbos-modales-en-ingles',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Ángel Cárdenas López',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
