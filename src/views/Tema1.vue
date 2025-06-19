<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Toma de decisiones

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.color-acento-botones
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Comercializar productos y servicios es una actividad muy importante en el desarrollo de cualquier entidad. Implica no solo la venta de productos o servicios, sino también la creación de una relación duradera con los clientes mediante estrategias efectivas de venta, atención y fidelización. 

    separador

    div.mb-5(data-aos="fade-right")
      h3.position-relative#t_1_1 1.1	Concepto
        img.w-auto.pt-2(src='@/assets/curso/temas/tema1/img_0.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-3.col-md-5.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img_02.png', alt='Imagen decorativa')
      .col-lg-9.mb-4
        p El servicio al cliente se entiende como el conjunto de actividades, comportamientos y actitudes que una empresa ofrece para satisfacer las necesidades y expectativas de sus clientes. Es un factor crucial para el éxito de cualquier negocio, ya que un buen servicio puede fidelizar a los clientes y generar recomendaciones, mientras que un mal servicio puede perjudicar la reputación de la empresa.

        .cajon.bg-03.p-4
          p.mb-0 Cada tipo de <em>merchandising</em> responde a un objetivo particular. Por ejemplo, el <em>merchandising</em> visual busca captar la atención inicial del cliente, mientras que el estratégico tiene como finalidad aumentar la eficiencia del punto de venta basándose en el comportamiento del consumidor.

      .col-md-12.col-sm-12.mx-auto
        .tarjeta.bg_azul.mb-5.p-3
          .tarjeta.p-2
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-3
                  h5 Ejemplo 1
                  p.mb-0 Una tienda <em>online</em> permite realizar devoluciones sin complicaciones, ofrece respuestas rápidas por chat y hace seguimiento personalizado para asegurar que el cliente quede satisfecho con su compra.
                .col-md-12.col-lg-9.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img_03.png', alt='Imagen Decorativa')
                
              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-3
                  h5 Ejemplo 2
                  p.mb-0 Un restaurante capacita a su personal para atender con amabilidad, resolver reclamos de inmediato y ofrecer cortesías cuando hay demoras, generando una experiencia positiva que motiva al cliente a volver.
                .col-md-12.col-lg-9.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img_04.png', alt='Imagen Decorativa')
                
              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-3
                  h5 Ejemplo 3
                  p.mb-0 Una empresa de telefonía llama a sus clientes después de instalar un servicio para verificar que todo funcione correctamente, escucha sugerencias y ofrece mejoras adaptadas a su perfil de consumo.
                .col-md-12.col-lg-9.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img_05.png', alt='Imagen Decorativa')
             
    separador

    div.mb-5(data-aos="fade-right")
      h3.position-relative#t_1_2 1.2	Ciclo
        img.w-auto.pt-2(src='@/assets/curso/temas/tema1/img_0.png', alt='')

    .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")
      .col-md-5.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img_5_5.png', alt='Imagen decorativa')
      .col-lg-10
        p.mb-0 El ciclo de servicio al cliente describe el recorrido que realiza un cliente desde su primer contacto con la empresa hasta después de la compra. Cada etapa del ciclo debe ser gestionada cuidadosamente para garantizar la satisfacción del cliente.


    .row.justify-content-center.align-items-center.my-3.mb-5(data-aos="zoom-in").ordenar_div
      .col-md-12.col-lg-9
        .titulo-sexto.mb-4
          h5 Tabla 1. 
          span.text-dark
            i Ciclo del servicio al cliente

        .tabla-a.tabla_verde
          table
            caption <strong>Fuente:</strong> adaptado ecosistema SENA, 2025
            thead
              tr
                th.text-dark.w-10 Etapa
                th.text-dark.w-65 Actividades Principales
                th.text-dark.w-11 Objetivo
            tbody
              tr
                td.text-left Preventa
                td.text-left
                  | - Identificación de necesidades del cliente
                  br
                  | - Presentación inicial del producto o servicio
                  br
                  | - Entrega de información clara y útil
                  br
                  | - Generación de confianza sin presión de compra
                td.text-left Crear interés en el cliente, posicionar la solución que se ofrece y construir una relación inicial basada en la confianza.
              tr
                td.text-left Venta
                td.text-left
                  | - Atención personalizada y eficiente
                  br
                  | - Demostración del producto (si aplica)
                  br
                  | - Resolución de dudas en tiempo real
                  br
                  | - Gestión rápida y clara del proceso de pago y entrega
                td.text-left Facilitar la toma de decisiones, cerrar la venta de manera positiva y asegurar una experiencia de compra satisfactoria.
              tr
                td.text-left Postventa
                td.text-left
                  | - Confirmación de entrega y funcionamiento del producto o servicio
                  br
                  | - Resolución de inconvenientes
                  br
                  | - Solicitud de retroalimentación
                  br
                  | - Ofrecimiento de servicios adicionales o nuevas ofertas
                td.text-left Asegurar la satisfacción del cliente, fortalecer la relación comercial y fomentar la recompra o recomendación.

      .col-md-5.col-lg-3.mt-auto.mb-3.arriba
        figure
          img(src='@/assets/curso/temas/tema1/img_06.png', alt='Imagen decorativa')


    .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")

      .col-lg-10.mb-4
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema1/img_07.png', alt='Imagen decorativa')
          div.texto-tarjeta
            p.mb-0 Seguidamente se presentan las etapas del proceso decisorio, adaptadas al contexto del punto de venta.


    .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")

      .col-lg-10.mb-4
        .titulo-sexto.mb-4
          h5 Figura 1. 
          span.text-dark
            i Ciclo del servicio al cliente 

        figure.mb-4
          figure.mb-3
            img(src='@/assets/curso/temas/tema1/img_08.png', alt='Texto que describa la imagen')

          figcaption 
            b Fuente: 
            |  Adaptado ecosistema SENA, 2025

    separador

    div.mb-5(data-aos="fade-right")
      h3.position-relative#t_1_3 1.3	Estrategias
        img.w-auto.pt-2(src='@/assets/curso/temas/tema1/img_0.png', alt='')


    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.color-acento-contenido
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_09.png')})`}"
          )
          .bloque-texto-g__texto.p-4.w-75
            p Las estrategias de servicio al cliente se diseñan para mejorar la interacción con el cliente, aumentar su satisfacción y fidelización. Algunas de las principales estrategias incluyen:



    separador

    div.mb-5(data-aos="fade-right")
      h3.position-relative#t_1_4 1.4	Técnicas de comunicación
        img.w-auto.pt-2(src='@/assets/curso/temas/tema1/img_0.png', alt='')


    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-md-6.col-lg-3.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/img_13.png', alt='Imagen decorativa')
      .col-lg-9
        p.mb-3 Las técnicas de comunicación son herramientas esenciales para brindar un servicio al cliente de calidad, ya que permiten crear un ambiente de confianza, comprensión y resolución efectiva de necesidades. Una comunicación eficaz no solo mejora la experiencia del cliente, sino que también fortalece la relación entre este y la organización. 
        p.mb-0 Seguidamente, se describen algunas de las técnicas más utilizadas:

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in")
      .col-md-12.col-sm-12.mx-auto
        .tarjeta.bg_azul.mb-5.p-3
          .tarjeta.p-2
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-8
                  h5 Escucha activa 
                  p.mb-2 La escucha activa va más allá de simplemente oír al cliente; implica prestar atención consciente, sin interrupciones, mostrando comprensión a través de gestos y palabras. Requiere concentración, contacto visual y retroalimentación verbal y no verbal.
                  p.mb-2 Según Robbins y Judge (2013), esta práctica fortalece la confianza entre las partes y permite comprender con mayor claridad las necesidades del cliente, lo que facilita brindar respuestas apropiadas y empáticas.
                  p.mb-0 Ejemplos de escucha activa incluyen atender una queja sin interrumpir, tomando notas y ofreciendo apoyo verbal, o confirmar la información proporcionada por el cliente repitiendo su solicitud para asegurar una correcta comprensión.
                
                .col-md-8.col-lg-3.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img_14.png', alt='Imagen Decorativa')

              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-8
                  h5 Escucha activa 
                  p.mb-2 El lenguaje positivo consiste en utilizar expresiones amables y propositivas que favorecen un ambiente cordial y colaborativo. Frases como “será un placer ayudarle” o “buscaremos la mejor solución posible” transmiten profesionalismo y disposición, lo que mejora la experiencia del cliente y reduce posibles tensiones.
                  p.mb-2 Además, enfocar la comunicación en soluciones en lugar de problemas permite mantener una actitud proactiva. Según Kotler y Keller (2016), un trato cordial influye significativamente en la percepción del valor del servicio.
                  p.mb-0 Ejemplos incluyen reemplazar respuestas negativas como “no se puede” por afirmaciones enfocadas en alternativas, o agradecer la paciencia del cliente mientras se resuelve su solicitud.

                
                .col-md-8.col-lg-3.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img_15.png', alt='Imagen Decorativa')
                
              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-8
                  h5 Escucha activa 
                  p.mb-2 La empatía implica comprender y conectar emocionalmente con otra persona, reconociendo sus sentimientos sin emitir juicios. En el contexto del servicio al cliente, se expresa al reconocer las emociones del usuario y responder con respeto y comprensión.
                  p.mb-2 Ser empático no implica estar necesariamente de acuerdo, sino validar la experiencia del cliente y mostrar disposición para ayudar. Como señala Goleman (2006), la empatía es una habilidad fundamental de la inteligencia emocional y clave para establecer relaciones humanas efectivas.
                  p.mb-0 Ejemplos prácticos incluyen reconocer la molestia de un cliente y asegurar que se buscará una solución, o brindar apoyo paciente a alguien que enfrenta dificultades con un servicio o herramienta.

                
                .col-md-8.col-lg-3.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img_16.png', alt='Imagen Decorativa')
                
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
