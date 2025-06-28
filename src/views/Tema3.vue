<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Objetivos de venta

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-12.mb-4
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema3/img_01.png', alt='Imagen decorativa')
          div.texto-tarjeta
            p.mb-0 Un objetivo es una meta que se establece para ser alcanzada en un plazo determinado. Es un rutero que orienta las acciones hacia un propósito claro. En cualquier ámbito tanto personal, académico o laboral, los objetivos sirven para organizar los esfuerzos, tomar decisiones acertadas y evaluar el progreso. Sin objetivos definidos, es difícil saber si se avanza o se retrocede.


    separador

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-md-12.col-lg-10.mb-0

        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_3_1 3.1 Concepto
      
        .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
          .col-lg-5.col-md-8.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img_02.png', alt='Imagen decorativa')
          .col-lg-7.mb-4
            p Los objetivos de venta son metas específicas que una empresa o equipo comercial define con el propósito de orientar sus esfuerzos y evaluar su desempeño. Estas metas permiten establecer un rumbo claro, facilitar la toma de decisiones y ajustar las estrategias según los resultados obtenidos. 

            .cajon.bg-03.p-4
              p.mb-0 Kotler y Keller (2016) señalan que los objetivos de venta deben ser alcanzables, medibles y coherentes con la estrategia general de la empresa. Cuando se formulan correctamente, estos objetivos permiten al equipo enfocarse en las acciones clave que conducen al éxito comercial.

        separador

        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_3_2 3.2 Tipos

        .row.justify-content-center.my-3.mb-4(data-aos="zoom-in")

          .col-lg-12.mb-4
            p Los objetivos de venta pueden dividirse en diferentes categorías, según el tipo de resultado que se desea alcanzar en: 

          .col-md-6.col-lg-6.mb-4.mb-lg-0
            .tarjeta.bg-10
              .row
                .col-md-12.col-lg-12
                  img(src="@/assets/curso/temas/tema3/img_03.png").mx-auto
                  .col-md-12.col-lg-12.p-3
                    h5.mb-3 Objetivos cuantitativos 
                    p.p-movil Están orientados a resultados medibles expresados en cifras, como la cantidad de productos vendidos, los ingresos obtenidos o el porcentaje de participación en el mercado.

          .col-md-6.col-lg-6.mb-4.mb-lg-0
            .tarjeta.bg-11
              .row
                .col-md-12.col-lg-12
                  img(src="@/assets/curso/temas/tema3/img_04.png").mx-auto
                  .col-md-12.col-lg-12.p-3
                    h5.mb-3 Objetivos cualitativos 
                    p.p-movil Están relacionados con aspectos intangibles que también impactan en el éxito comercial, como la percepción del cliente, la fidelización o la calidad del servicio.
          

        .row.justify-content-center.align-items-center.my-3.mb-0(data-aos="zoom-in")
          .col-lg-12.mb-3
            p A continuación, se presenta una tabla con ejemplos para ilustrar ambos tipos:
          .col-md-12.col-lg-12
            .titulo-sexto.mb-4
              h5 Tabla 3. 
              span.text-dark Tipos de objetivo 

            .tabla-a.tabla_verde
              table
                caption
                  strong Fuente: 
                  | adaptado de Kotler, P., & Keller, K. L. (2016).
                thead
                  tr
                    th.bg-color-4.text-dark.w-10 Tipo de objetivo
                    th.bg-color-4.text-dark Ejemplo
                    th.bg-color-4.text-dark Descripción
                tbody
                  tr
                    td.text-left(rowspan="3") CUANTITATIVO
                    td.text-left Incrementar las ventas en un 20 %.
                    td.text-left Medir el éxito mediante resultados numéricos claros.
                  tr
                    td.text-left Aumentar cuota de mercado en un 8 %.
                    td.text-left Meta enfocada en mejorar la posición competitiva de la empresa en el sector.
                  tr
                    td.text-left Vender 500 unidades de un producto en un trimestre.
                    td.text-left Se centra en alcanzar un volumen específico de ventas.
                  
                  tr
                    td.text-left(rowspan="3") CUALITATIVO
                    td.text-left Mejorar la satisfacción del cliente en un 20 %.
                    td.text-left Dirigido a comprender cómo el cliente vive e interpreta su relación con la marca.
                  tr
                    td.text-left Aumentar fidelización de los clientes habituales.
                    td.text-left Apunta a consolidar el vínculo emocional y la continuidad del cliente con la marca.
                  tr
                    td.text-left Optimizar la calidad del servicio en los puntos de venta.
                    td.text-left Persigue mejorar procesos y atención más allá del resultado económico.

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
