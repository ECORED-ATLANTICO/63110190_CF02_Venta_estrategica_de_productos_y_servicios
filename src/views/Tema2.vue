<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Momentos de verdad

    .row.p-0.g-0
      .col-lg-10.col-12.mx-auto
        .row.bg-verde.p-0.g-0.mb-5
          .col-md-4(
              :style="{'background': `url(${require('@/assets/curso/temas/tema2/img_01.png')}) right no-repeat`,'min-height':'100px','background-size':'cover'}"
            )
          .col-12.col-md-8.p-4
            p.mb-0 Un momento de verdad es importante porque define cómo el cliente percibe el servicio. En ese breve encuentro, la atención recibida puede generar confianza, satisfacción o, por el contrario, decepción. Cada contacto debe ser manejado con empatía y amabilidad para fortalecer la relación con el cliente.

    separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Concepto
    
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-9.mb-4
        p Los momentos de verdad son aquellos puntos de contacto entre el cliente y la empresa donde se define la percepción que el cliente tiene de la marca o servicio. Estos momentos son clave para la construcción de la relación con el cliente y pueden ser tanto positivos como negativos, dependiendo de cómo se manejen.

        p Ladhari (2009) sugiere que los momentos de verdad son fundamentales para establecer una relación de confianza y satisfacción con el cliente. Cada vez que un cliente interactúa con la empresa, se crea una oportunidad para fortalecer su lealtad o perderla.
        
      .col-lg-3.col-md-8.mb-4.col-6
        figure
          img(src='@/assets/curso/temas/tema2/img_02.png', alt='Imagen decorativa')
     
    separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.2 Ciclo

    .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")

      .col-lg-12.mb-4
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema2/img_03.png', alt='Imagen decorativa')
          div.texto-tarjeta
            p.mb-0 En el proceso de interacción entre una empresa y sus clientes, se pueden identificar distintos momentos clave que influyen directamente en la percepción que el cliente desarrolla sobre la marca. Estos momentos se agrupan, principalmente, en momentos de contacto y momentos de experiencia. A continuación, se incluyen ejemplos en formato de tabla para clarificar cada categoría con ejemplos:

    .row.justify-content-center.align-items-center.my-3.mb-5(data-aos="zoom-in")
      .col-md-12.col-lg-9
        .titulo-sexto.mb-4
          h5 Tabla 2. 
          span.text-dark
            i Tipos de momento de verdad 

        .morado
          .tabla-a
            table
              caption
                strong Fuente: adaptado ecosistema SENA, 2025.
              thead
                tr
                  th.text-white.w-22 Tipo
                  th.text-white.w-50 Descripción
                  th.text-white.w-30 Ejemplo
              tbody
                tr
                  td.text-left Momentos de contacto
                  td.text-left
                    | Son todas aquellas interacciones directas que el cliente tiene con la empresa, ya sea de forma presencial, telefónica o digital.
                    br
                    | Estos momentos suelen ser los primeros puntos de conexión y tienen un alto impacto en la construcción de confianza y expectativa.
                  td.text-left
                    | - Un cliente que pregunta por teléfono sobre la existencia en bodega de un producto.
                    br
                    | - Una persona que visita una tienda física y es atendida por un asesor.
                    br
                    | - Un usuario que chatea por WhatsApp con servicio al cliente.
                tr
                  td.text-left Momentos de experiencia
                  td.text-left
                    | Corresponden a la fase en la que el cliente ya ha accedido al producto o servicio y realiza una evaluación basada en su uso.
                    br
                    | Estos momentos impactan significativamente en la satisfacción del cliente y en la posibilidad de que recomiende la empresa.
                  td.text-left
                    | - El cliente que utiliza un producto y evalúa si cumple con sus expectativas.
                    br
                    | - Una familia que prueba un restaurante y comenta la experiencia en redes.
                    br
                    | - Una persona que recibe una compra digital y valora tanto el estado del paquete como la puntualidad del envío.
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
