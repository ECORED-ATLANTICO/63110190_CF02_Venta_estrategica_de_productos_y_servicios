<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Servicio al cliente

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.color-acento-botones
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Comercializar productos y servicios es una actividad muy importante en el desarrollo de cualquier entidad. Implica no solo la venta de productos o servicios, sino también la creación de una relación duradera con los clientes mediante estrategias efectivas de venta, atención y fidelización. 

    separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.1 Concepto
    
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-md-4.col-lg-3.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img_02.png', alt='Imagen decorativa').mx-auto
      .col-lg-9.mb-4
        p El servicio al cliente se entiende como el conjunto de actividades, comportamientos y actitudes que una empresa ofrece para satisfacer las necesidades y expectativas de sus clientes. Es un factor crucial para el éxito de cualquier negocio, ya que un buen servicio puede fidelizar a los clientes y generar recomendaciones, mientras que un mal servicio puede perjudicar la reputación de la empresa.

        .cajon.bg-03.p-4
          p.mb-0 El servicio al cliente va más allá del momento de la compra, ya que también abarca la etapa de postventa, donde se brinda apoyo mediante la atención de quejas, respuestas a consultas, solución de inconvenientes y seguimiento continuo. Según Zeithaml, Bitner y Gremler (2017), el servicio al cliente implica una relación de intercambio en la que el cliente recibe valor agregado para que la empresa pueda garantizar la satisfacción y fidelidad del cliente a lo largo del tiempo.

      .col-md-12.col-sm-12.mx-auto
        .tarjeta.bg_azul.mb-5.p-3
          .tarjeta.p-2
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-3.mb-4
                  h5 Ejemplo 1
                  p.mb-0 Una tienda <em>online</em> permite realizar devoluciones sin complicaciones, ofrece respuestas rápidas por 
                  i chat 
                  | y hace seguimiento personalizado para asegurar que el cliente quede satisfecho con su compra.
                .col-md-12.col-lg-9.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img_03.png', alt='Imagen Decorativa')
                
              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-3.mb-4
                  h5 Ejemplo 2
                  p.mb-0 Un restaurante capacita a su personal para atender con amabilidad, resolver reclamos de inmediato y ofrecer cortesías cuando hay demoras, generando una experiencia positiva que motiva al cliente a volver.
                .col-md-12.col-lg-9.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img_04.png', alt='Imagen Decorativa')
                
              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-3.mb-4
                  h5 Ejemplo 3
                  p.mb-0 Una empresa de telefonía llama a sus clientes después de instalar un servicio para verificar que todo funcione correctamente, escucha sugerencias y ofrece mejoras adaptadas a su perfil de consumo.
                .col-md-12.col-lg-9.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img_05.png', alt='Imagen Decorativa')
             
    separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_2 1.2 Ciclo

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-md-5.col-lg-2.b-lg-block.quitar
        figure
          img(src='@/assets/curso/temas/tema1/img_5_5.png', alt='Imagen decorativa')
      .col-lg-10
        p.mb-0 El ciclo de servicio al cliente describe el recorrido que realiza un cliente desde su primer contacto con la empresa hasta después de la compra. Cada etapa del ciclo debe ser gestionada cuidadosamente para garantizar la satisfacción del cliente.


    .row.justify-content-center.align-items-center.my-3.mb-5(data-aos="zoom-in").ordenar_div
      .col-md-12.col-lg-9
        .titulo-sexto.mb-4
          h5 Tabla 1. 
          span.text-dark Ciclo del servicio al cliente

        .tabla-a.tabla_verde
          table
            caption 
              b Nota.
              | Adaptado ecosistema SENA, 2025.
            thead
              tr
                th.text-dark.w-10 Etapa
                th.text-dark.w-65 Actividades Principales
                th.text-dark.w-11 Objetivo
            tbody
              tr
                td.text-left Preventa
                td.text-left
                  | - Identificación de necesidades del cliente.
                  br
                  | - Presentación inicial del producto o servicio.
                  br
                  | - Entrega de información clara y útil.
                  br
                  | - Generación de confianza sin presión de compra.
                td.text-left Crear interés en el cliente, posicionar la solución que se ofrece y construir una relación inicial basada en la confianza.
              tr
                td.text-left Venta
                td.text-left
                  | - Atención personalizada y eficiente.
                  br
                  | - Demostración del producto (si aplica).
                  br
                  | - Resolución de dudas en tiempo real.
                  br
                  | - Gestión rápida y clara del proceso de pago y entrega.
                td.text-left Facilitar la toma de decisiones, cerrar la venta de manera positiva y asegurar una experiencia de compra satisfactoria.
              tr
                td.text-left Postventa
                td.text-left
                  | - Confirmación de entrega y funcionamiento del producto o servicio.
                  br
                  | - Resolución de inconvenientes.
                  br
                  | - Solicitud de retroalimentación.
                  br
                  | - Ofrecimiento de servicios adicionales o nuevas ofertas.
                td.text-left Asegurar la satisfacción del cliente, fortalecer la relación comercial y fomentar la recompra o recomendación.

      .col-md-4.col-lg-3.mt-auto.mb-3.arriba.col-10
        figure
          img(src='@/assets/curso/temas/tema1/img_06.png', alt='Imagen decorativa').mx-auto


    .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")

      .col-lg-10.mb-4
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema1/img_07.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-08
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/tema1/img_17.png").img65
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Ir a los videos con tema portafolio de ventas:
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=WUfnXYuQHXI" target="_blank")
                      span Ver Video
                      i.fas.fa-file-video

    .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")

      .col-lg-10.mb-4
        .titulo-sexto.mb-4
          h5 Figura 1. 
          span.text-dark Ciclo del servicio al cliente 

        figure.mb-4
          figure.mb-3
            img(src='@/assets/curso/temas/tema1/img_08.svg', alt='Texto alternativo').mx-auto.mostrar
            img(src='@/assets/curso/temas/tema1/img_08_0.svg', alt='Texto alternativo').mx-auto.ocultar

          figcaption 
            b Fuente: 
            | SENA, 2025.

    separador

    .row
      .col-12.col-lg-10.mx-auto
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_1_3 1.3 Estrategías

        .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
          .col-lg-12
            .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.color-acento-contenido
              .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_09.png')})`,'background-position': 'left center','background-repeat': 'no-repeat','background-size': 'cover'}")
              .bloque-texto-g__texto.p-4
                p Las estrategias de servicio al cliente se diseñan para mejorar la interacción con el cliente, aumentar su satisfacción y fidelización. Algunas de las principales estrategias incluyen:

        .row.justify-content-center.mb-4
          .col-10.col-md-12.col-lg-4.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/img_10.svg' alt='AvatarTop')
              .tarjeta.bg-05.shadow
                .p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3
                        p.mb-0.text-center
                          b Atención personalizada

                  p.text-center.mb-0 Ofrecer un servicio adaptado a las necesidades específicas de cada cliente. Ejemplo: una clínica odontológica asigna un asesor a cada paciente, quien conoce su historial, le recuerda sus citas y le recomienda tratamientos adecuados según su caso.

          .col-10.col-md-12.col-lg-4.mb-4(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/img_11.svg' alt='AvatarTop')
              .tarjeta.bg-09.shadow
                .p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3
                        p.mb-0.text-center
                          b Proactividad
                  p.text-center.mb-0 Anticiparse a las necesidades de los clientes y brindarles soluciones antes de que ellos tengan que solicitarlas. Ejemplo: una empresa de tecnología detecta que algunos usuarios tienen problemas con una actualización reciente, y les envía un tutorial personalizado antes de que presenten quejas.

          .col-10.col-md-12.col-lg-4.mb-4(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/img_12.svg' alt='AvatarTop')
              .tarjeta.bg-08.shadow
                .p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3
                       p.mb-0.text-center
                          b Comunicación efectiva

                  p.text-center.mb-0 Utilizar canales adecuados y claros para comunicar información importante al cliente, como cambios de horario, disponibilidad de productos o políticas de garantía. Ejemplo: un gimnasio informa por WhatsApp y correo electrónico sobre cierres temporales, horarios especiales en festivos y nuevas clases disponibles, evitando molestias y mejorando la experiencia del cliente.

        separador

        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_1_4 1.4 Técnicas de comunicación

        .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
          .col-md-6.col-lg-3.mb-4.mb-lg-0
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
                  .col-md-12.col-lg-8.mb-4
                    h5 Escucha activa 
                    p.mb-2 La escucha activa va más allá de simplemente oír al cliente; implica prestar atención consciente, sin interrupciones, mostrando comprensión a través de gestos y palabras. Requiere concentración, contacto visual y retroalimentación verbal y no verbal.
                    p.mb-2 Según Robbins y Judge (2013), esta práctica fortalece la confianza entre las partes y permite comprender con mayor claridad las necesidades del cliente, lo que facilita brindar respuestas apropiadas y empáticas.
                    p.mb-0 Ejemplos de escucha activa incluyen atender una queja sin interrumpir, tomando notas y ofreciendo apoyo verbal, o confirmar la información proporcionada por el cliente repitiendo su solicitud para asegurar una correcta comprensión.
                  
                  .col-md-8.col-lg-3.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/temas/tema1/img_14.png', alt='Imagen Decorativa')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-12.col-lg-8.mb-4
                    h5 Lenguaje positivo 
                    p.mb-2 El lenguaje positivo consiste en utilizar expresiones amables y propositivas que favorecen un ambiente cordial y colaborativo. Frases como “será un placer ayudarle” o “buscaremos la mejor solución posible” transmiten profesionalismo y disposición, lo que mejora la experiencia del cliente y reduce posibles tensiones.
                    p.mb-2 Además, enfocar la comunicación en soluciones en lugar de problemas permite mantener una actitud proactiva. Según Kotler y Keller (2016), un trato cordial influye significativamente en la percepción del valor del servicio.
                    p.mb-0 Ejemplos incluyen reemplazar respuestas negativas como “no se puede” por afirmaciones enfocadas en alternativas, o agradecer la paciencia del cliente mientras se resuelve su solicitud.

                  
                  .col-md-8.col-lg-3.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/temas/tema1/img_15.png', alt='Imagen Decorativa')
                  
                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-12.col-lg-8.mb-4
                    h5 Empatía
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
