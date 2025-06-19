export default {
  global: {
    Name: 'Comercialización de productos y servicios',
    Description:
      'Este componente brinda herramientas básicas para comprender y aplicar conceptos de comercialización de productos y servicios. A través de estrategias, técnicas de venta y atención al cliente, el aprendiz desarrollará habilidades clave para interactuar eficazmente con el mercado, mejorar la experiencia del consumidor y fortalecer su desempeño en entornos comerciales reales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
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
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Concepto', hash: 't_1_1' },
          { numero: '1.2', titulo: 'Ciclo', hash: 't_1_2' },
          { numero: '1.3', titulo: 'Estrategias', hash: 't_1_3' },
          { numero: '1.4', titulo: 'Técnicas de comunicación', hash: 't_1_4' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Momentos de verdad',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Concepto', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Tipos', hash: 't_2_2' },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Objetivos de venta',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Concepto', hash: 't_3_1' },
          { numero: '3.2', titulo: 'Tipos', hash: 't_3_2' },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estrategias de venta',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Definición', hash: 't_4_1' },
          { numero: '4.2', titulo: 'Tipos', hash: 't_4_2' },
          { numero: '4.3', titulo: 'Criterios de aplicación', hash: 't_4_3' },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Técnicas de ventas',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Definición', hash: 't_5_1' },
          { numero: '5.2', titulo: 'Tipos', hash: 't_5_2' },
          { numero: '5.3', titulo: 'Aplicabilidad', hash: 't_5_3' },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Proceso de venta',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '6.1', titulo: 'Concepto', hash: 't_6_1' },
          { numero: '6.2', titulo: 'Fases', hash: 't_6_2' },
          { numero: '6.3', titulo: 'Ruta de venta', hash: 't_6_3' },
          { numero: '6.4', titulo: 'Ejemplo', hash: 't_6_4' },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Servicio al cliente',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Tipos de venta [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WUfnXYuQHXI',
    },
    {
      tema: 'Estrategias de ventas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Estrategias de venta [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=O_uQYV8rZ3k',
    },
  ],
  glosario: [
    {
      termino: 'Atención al cliente',
      significado:
        'Actividades orientadas a garantizar la satisfacción del cliente.',
    },
    {
      termino: 'Cierre de venta',
      significado:
        'Finalización del proceso de venta con la aceptación de la oferta.',
    },
    {
      termino: 'Cliente potencial',
      significado:
        'Persona o empresa que podría beneficiarse de los productos o servicios.',
    },
    {
      termino: 'Comunicación efectiva',
      significado: 'Técnica de transmitir información clara y precisa.',
    },
    {
      termino: 'Competencia',
      significado:
        'Empresas que ofrecen productos o servicios similares a los de una empresa.',
    },
    {
      termino: 'Contacto inicial',
      significado: 'Primer punto de interacción entre cliente y empresa.',
    },
    {
      termino: 'Ciclo de ventas',
      significado: 'Conjunto de fases a seguir para cerrar una venta.',
    },
    {
      termino: 'Consultoría',
      significado:
        'Asesoramiento especializado para satisfacer las necesidades del cliente.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Proceso de crear lealtad en el cliente mediante una experiencia positiva.',
    },
    {
      termino: 'Herramientas de ventas',
      significado:
        'Métodos, recursos o técnicas utilizadas para facilitar la venta.',
    },
    {
      termino: 'Investigación de mercado',
      significado:
        'Proceso de recopilación y análisis de información sobre el mercado.',
    },
    {
      termino: 'Lealtad del cliente',
      significado: 'Compromiso continuo del cliente con la marca.',
    },
    {
      termino: 'Marketing relacional',
      significado:
        'Estrategia orientada a crear y mantener relaciones con los clientes.',
    },
    {
      termino: 'Negociación',
      significado:
        'Proceso de alcanzar un acuerdo en las ventas entre el vendedor y el cliente.',
    },
    {
      termino: 'Oportunidad de venta',
      significado:
        'Situación donde existe una posibilidad de realizar una venta.',
    },
    {
      termino: 'Prospección',
      significado: 'Identificación de nuevos clientes potenciales.',
    },
    {
      termino: 'Resolución de quejas',
      significado:
        'Proceso de manejar y solucionar los problemas planteados por los clientes.',
    },
    {
      termino: 'Venta cruzada',
      significado:
        'Técnica que ofrece productos adicionales a la compra original.',
    },
    {
      termino: 'Venta consultiva',
      significado:
        'Estrategia donde el vendedor actúa como un asesor que ayuda al cliente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Armstrong, G., & Kotler, P. (2017). <em>Principles of marketing</em> (17th ed.). Pearson Education.',
      link:
        'https://campus.eco.unlpam.edu.ar/pluginfile.php/154367/mod_resource/content/1/Marketing%20Kotler-Armstrong.pdf',
    },
    {
      referencia:
        'Chiavenato, I. (2006). <em>Introducción a la teoría general de la administración</em> (7.ª ed.). McGraw-Hill.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/15525/mod_resource/content/0/Chiavenato%20Idalverto.%20Introducci%C3%B3n%20a%20la%20teor%C3%ADa%20general%20de%20la%20Administraci%C3%B3n.pdf',
    },
    {
      referencia:
        'Goleman, D. (2006). <em>Inteligencia emocional</em>. Editorial Kairós.',
      link:
        'https://iuymca.edu.ar/wp-content/uploads/2022/01/La-Inteligencia-Emocional-Daniel-Goleman-1.pdf',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). <em>Marketing management</em> (15th ed.). Pearson.',
      link:
        'https://students.aiu.edu/submissions/profiles/resources/onlineBook/S3D7W4_Marketing_Management.pdf',
    },
    {
      referencia:
        'Parasuraman, A., Zeithaml, V. A., & Berry, L. L. (1988). SERVQUAL: A multiple‑item scale for measuring consumer perceptions of service quality. <em>Journal of Retailing</em>, 64(1), 12–40.',
      link:
        'https://www.researchgate.net/publication/200827786_SERVQUAL_A_Multiple-item_Scale_for_Measuring_Consumer_Perceptions_of_Service_Quality',
    },
    {
      referencia:
        'Robbins, S. P., & Judge, T. A. (2013). <em>Comportamiento organizacional</em> (15.ª ed.). Pearson Educación.',
      link:
        'https://www.academia.edu/42008048/Comportamiento_Organizacional_15a_Edicio_n_Stephen_P_Robbins_and_Timothy_A_Judge',
    },
    {
      referencia:
        'Zeithaml, V. A., Bitner, M. J., & Gremler, D. D. (2017). <em>Services marketing: Integrating customer focus across the firm</em> (7th ed.). McGraw-Hill Education.',
      link:
        'https://es.scribd.com/document/539719373/Zeithaml-V-et-al-2018-Marketing-de-Servicios-7ma-Ed-paginas-200-230',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
