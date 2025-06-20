<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Objetivos de venta

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-md-10.col-lg-10.mb-4

        .row.p-0.g-0
          .col-12.mx-auto
            .row.bg-04.p-0.g-0.mb-5
              .col-md-4(
                  :style="{'background': `url(${require('@/assets/curso/temas/tema4/img_01.png')}) right no-repeat`,'min-height':'100px','background-size':'cover'}"
                )
              .col-12.col-md-8.p-4
                p.mb-0 Una estrategia es un plan de acción cuidadosamente diseñado para alcanzar un objetivo determinado. Las estrategias no son improvisaciones; son el resultado del análisis, la experiencia y la planificación enfocada en lograr resultados sostenibles.

        separador

        .titulo-segundo.color-acento-contenido
          h2#t_4_1 4.1 Definición

        .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
          .col-lg-2.col-md-5.mb-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema4/img_02.svg', alt='Imagen decorativa')
          .col-lg-8.mb-4
            p Las estrategias de venta son los enfoques, métodos y tácticas que los vendedores emplean para atraer la atención del cliente, generar su interés, influir en su decisión de compra y asegurar una venta exitosa. Estas estrategias pueden ajustarse dependiendo del tipo de cliente, del producto o servicio ofrecido y del entorno del mercado. Su adecuada implementación puede ser determinante para convertir una venta ocasional en una relación comercial a largo plazo.

          .col-lg-2.col-md-5.mb-4.col-6
            figure
              img(src='@/assets/curso/temas/tema4/img_03.svg', alt='Imagen decorativa').mx-auto

          .col-lg-12.mb-4
            p Según Kotler y Armstrong (2017), las estrategias de venta efectivas integran el conocimiento del cliente, el dominio del producto y habilidades de comunicación. El objetivo no es simplemente cerrar una venta, sino ofrecer una experiencia de compra tan positiva que motive al cliente a volver.

        separador

        .titulo-segundo.color-acento-contenido
          h2#t_4_2 4.2 Tipos

        .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")

          .col-lg-12.mb-4
            div.tarjeta-horz.mb-3
              img(src='@/assets/curso/temas/tema4/img_05.png', alt='Imagen decorativa')
              div.texto-tarjeta
                p.mb-0 A continuación, se presenta una tabla con los tipos de estrategias más comunes, sus ejemplos y descripciones:

        .row.justify-content-center.align-items-center.my-3.mb-3(data-aos="zoom-in")
          .col-md-12.col-lg-12
            .titulo-sexto.mb-4
              h5 Tabla 4. 
              span.text-dark
                i Tipos de estrategias de venta en el servicio al cliente

            .morado
              .tabla-a
                table
                  caption
                    strong Fuente: Kotler, P., & Armstrong, G. (2017).
                  thead
                    tr
                      th.bg-color-4.text-white Tipo de Estrategia
                      th.bg-color-4.text-white Definición
                      th.bg-color-4.text-white Ejemplo
                  tbody
                    tr.bg-color-5
                      td.text-left Venta consultiva
                      td.text-left Estrategia centrada en comprender las necesidades del cliente para ofrecer soluciones personalizadas, generando confianza y relaciones a largo plazo.
                      td.text-left Un vendedor que escucha al cliente identifica que necesita un producto ecológico y le recomienda una línea sostenible.
                    tr.bg-color-5
                      td.text-left Venta transaccional
                      td.text-left Estrategia enfocada en concretar ventas rápidas, donde el precio y la eficiencia del proceso son más importantes que la relación a largo plazo.
                      td.text-left Un vendedor que ofrece una promoción del día para cerrar la venta de inmediato.
                    tr.bg-color-5
                      td.text-left Venta emocional
                      td.text-left Estrategia que apela a los sentimientos del cliente para generar un vínculo emocional con el producto, destacando beneficios personales o sociales.
                      td.text-left Un vendedor que resalta cómo el uso del producto puede contribuir a una vida más feliz y armoniosa en el hogar.
                    tr.bg-color-5
                      td.text-left Venta cruzada (cross-selling)
                      td.text-left Estrategia enfocada en incrementar el valor total de la compra sugiriendo productos adicionales que complementen la elección inicial del cliente.
                      td.text-left Un vendedor que, al vender un celular, sugiere también comprar un protector y unos audífonos.
                    tr.bg-color-5
                      td.text-left Venta basada en valor
                      td.text-left Estrategia que resalta los beneficios y el valor agregado del producto, más allá del precio, enfocándose en el retorno a largo plazo.
                      td.text-left Un asesor que destaca los beneficios económicos a futuro de una impresora eficiente, más allá de su precio inicial.

        separador

        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_4_3 4.3	Criterios de aplicación

        .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
          .col-lg-3.col-md-8.mb-4.col-8
            figure
              img(src='@/assets/curso/temas/tema4/img_04.svg', alt='Imagen decorativa')
          .col-lg-9.mb-4
            p Las estrategias de venta deben adaptarse al tipo de cliente, producto y contexto del mercado. Para una aplicación exitosa, los vendedores deben conocer bien el producto, ser capaces de comunicarse de manera efectiva, y tener la capacidad de resolver problemas. A continuación, se establecen criterios de aplicación según casos y clientes:


        .row.justify-content-center.align-items-center.my-3.mb-4(data-aos="zoom-in")
          .col-md-12.col-lg-12.mb-3
            .titulo-sexto.mb-4
              h5 Tabla 5. 
              span.text-dark
                i Adaptación de las técnicas de venta según cliente

            .tabla-a.tabla_verde
              table
                caption
                  strong Fuente: adaptado Kotler, P., & Keller, K. L. (2016).
                thead
                  tr
                    th.bg-color-4.text-dark Tipo de estrategia
                    th.bg-color-4.text-dark Criterios de Aplicación
                    th.bg-color-4.text-dark Cuándo aplicar
                tbody
                  tr
                    td.text-left Venta consultiva
                    td.text-left
                      | Ideal para clientes que buscan soluciones personalizadas y tienen necesidades complejas. Es más común en ventas B2B (business to business) o en productos y servicios técnicos. El vendedor actúa como un asesor, realizando preguntas para identificar las necesidades del cliente y luego ofrecer una solución específica.
                    td.text-left
                      | - Clientes con necesidades específicas o problemas complejos.
                      br
                      | - Productos o servicios que requieren un análisis detallado y personalizado.
                      br
                      | - Mercados donde se valora el conocimiento experto y el asesoramiento.
                  tr
                    td.text-left Venta transaccional
                    td.text-left
                      | Se enfoca en la venta rápida y directa de productos. Es común en entornos B2C (business to consumer) y en productos de bajo costo o de uso común.
                    td.text-left
                      | - Clientes que buscan una compra rápida, sin mucha investigación o discusión.
                      br
                      | - Productos sencillos, estándar o de bajo costo.
                      br
                      | - Contextos de alto volumen, donde la rapidez y la eficiencia son clave.
                  tr
                    td.text-left Venta emocional
                    td.text-left
                      | Consiste en generar un vínculo afectivo con el cliente, apelando a sus sentimientos, motivaciones personales y aspiraciones para influir en su decisión de compra.
                    td.text-left
                      | - Productos o servicios que están estrechamente relacionados con el estilo de vida, deseos personales o autoestima.
                      br
                      | - Clientes que toman decisiones impulsivas o emocionales.
                      br
                      | - Contextos donde la relación emocional con la marca o el producto es crucial, por ejemplo, moda, joyería y viajes.
                  tr
                    td.text-left Venta cruzada (Cross-selling)
                    td.text-left
                      | Implica sugerir artículos relacionados o complementarios a la compra principal del cliente, con el fin de ampliar su pedido y mejorar su experiencia.
                    td.text-left
                      | - Clientes que ya han demostrado interés en un producto o servicio y pueden beneficiarse de productos relacionados.
                      br
                      | - Productos que tienen sinergia o que complementan el producto principal, por ejemplo, accesorios, servicios adicionales, entre otros.
                      br
                      | - Escenarios en los que brindar una experiencia positiva al cliente y ofrecer beneficios significativos son aspectos fundamentales.
                  tr
                    td.text-left Venta basada en valor
                    td.text-left
                      | Enfocada en destacar el valor a largo plazo del producto o servicio, más allá de su precio inicial. Se aplica a productos o servicios de mayor valor o aquellos que ofrecen beneficios prolongados.
                    td.text-left
                      | - Productos o servicios de alto valor, donde el cliente toma decisiones basadas en beneficios a largo plazo.
                      br
                      | - Clientes que priorizan la calidad, la resistencia y los beneficios a largo plazo sobre el costo inicial del producto.
                      br
                      | - Contextos donde el producto o servicio tiene un impacto significativo en la vida o el negocio del cliente.

        .row.justify-content-center.align-items-center.my-3.mb-0(data-aos="zoom-in")
          .col-lg-12.mb-0
            div.tarjeta-horz.mb-3
              img(src='@/assets/curso/temas/tema4/img_06.png', alt='Imagen decorativa')
              div.texto-tarjeta.bg-05
                .row.justify-content-around.align-items-center
                  .col-auto
                    img(src="@/assets/curso/temas/tema4/img_07.png").img65
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1 Ir al video estrategias de venta: 
                      .col-sm-auto
                        a.boton.color-acento-botones(href=" https://www.youtube.com/watch?v=O_uQYV8rZ3k" target="_blank")
                          span Ver Video
                          i.fas.fa-file-video

</template>

<script>
export default {
  name: 'Tema4',
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
