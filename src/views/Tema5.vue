<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Técnicas de ventas

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.bg-13
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img_01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p En el ámbito comercial, las técnicas de ventas constituyen herramientas fundamentales para optimizar el proceso comercial, donde se especifican los métodos y estrategias que hacen posible transformar la interacción con clientes en resultados concretos.

    separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_5_1 5.1 Definición

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-3.col-md-8.mb-4
        figure
          img(src='@/assets/curso/temas/tema4/img_04.svg', alt='Imagen decorativa')
      .col-lg-9.mb-4
        p Las técnicas de ventas son un conjunto de métodos y estrategias utilizadas por los vendedores con el propósito de persuadir a los clientes y facilitar el proceso de compra. Estas herramientas permiten al vendedor identificar las necesidades del comprador, superar objeciones y cerrar una venta de manera efectiva. La elección de una técnica específica depende de factores como el tipo de producto o servicio ofrecido, el comportamiento del consumidor y el entorno del mercado (Kotler & Keller, 2016).



    separador
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_5_2 5.2 Tipos
   
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      
      .col-lg-12
        p.mb-3 A continuación, se describen algunas de las técnicas más empleadas en los procesos comerciales:

      .col-md-12.col-sm-12.mx-auto
        .tarjeta.bg_azul.mb-5.p-3
          .tarjeta.p-2
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-4.mb-4
                  h5 Venta  en frío	
                  p.mb-0 Esta técnica consiste en contactar a personas que no han mostrado interés previo en el producto o servicio. Es común en ventas telefónicas, visitas puerta a puerta o correos electrónicos masivos. Su objetivo es despertar el interés del cliente potencial a través de una primera interacción inesperada. (Dubinsky et al., 2020).

                .col-md-12.col-lg-8.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema5/img_02.png', alt='Imagen Decorativa')
                
              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-4.mb-4
                  h5 
                  i Up-selling 
                  | (venta adicional)	
                  p.mb-0 El objetivo es incentivar al cliente a adquirir una versión superior del producto o servicio que inicialmente desea comprar. Esta técnica es útil para aumentar el valor promedio de venta, siempre que la propuesta sea percibida como una mejora relevante. (Jobber & Lancaster, 2017)

                .col-md-12.col-lg-8.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema5/img_03.png', alt='Imagen Decorativa')
                
    separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_5_3 5.3 Aplicabilidad

    .row.justify-content-center.mb-2.align-items-center(data-aos="zoom-in")
      .col-lg-2.col-md-5.mb-4
        figure
          img(src='@/assets/curso/temas/tema5/img_04.svg', alt='Imagen decorativa').mx-auto
      .col-lg-10.mb-4
        p En el mundo comercial, aplicar la técnica adecuada en el momento oportuno puede marcar la diferencia entre una venta ocasional y una relación comercial duradera. Por eso, es clave entender cuándo aplicar estrategias como la venta en frío o el 
          i up-selling, 
          | ya que cada una responde a contextos y objetivos distintos. Mientras una apunta a captar nuevos clientes desde cero, la otra busca maximizar el valor de quienes ya están interesados. A continuación, exploramos en qué escenarios resulta más efectiva cada una.

    .row.justify-content-center.mb-5
      .bg-fondo-5.col-lg-10
        .row.justify-content-center
          .col-sm-6.col-lg-5.mb-4.mb-lg-0
            .tarjeta.tarjeta-slide.abajo.bg-12(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-lg-5.text-center
                  h4.text-white.bg-07.w-content.p-2.mx-auto Venta en frío
                  p Es efectiva en contextos donde se busca ampliar la base de clientes, especialmente en productos o servicios de uso general. Funciona bien en mercados con alta rotación o cuando el cliente no conoce aún la solución ofrecida, como en seguros, servicios financieros o ventas puerta a puerta.

                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img_08.png')})`}").mx-auto

          .col-sm-6.col-lg-5.mb-4.mb-lg-0
            .tarjeta.tarjeta-slide.abajo.bg-12(@mouseover="indicadorTarjetaSlide = false")
              .tarjeta-slide__contenedor
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img_07.png')})`}")
                .tarjeta-slide__contenido.p-4.p-lg-5.text-center
                  h4.text-white.bg-07.w-content.p-2.mx-auto <em>Up-selling</em> (venta adicional)
                  p Se aplica mejor cuando el cliente ya tiene intención de compra y está abierto a considerar mejoras. Ideal en sectores como tecnología, turismo, vehículos o servicios profesionales, donde una versión premium representa un valor agregado tangible.


    .row.justify-content-center.align-items-center.my-3.mb-0(data-aos="zoom-in")

      .col-lg-10.mb-4
        .titulo-sexto.mb-4
          h5 Figura 2. 
          span.text-dark Técnicas de venta y su aplicabilidad 

        figure.mb-4
          figure.mb-3
            img(src='@/assets/curso/temas/tema5/img_05.svg', alt='Texto alternativo').mx-auto.mostrar
            img(src='@/assets/curso/temas/tema5/img_06.svg', alt='Texto alternativo').mx-auto.ocultar

          figcaption 
            b Fuente: 
            |  adaptado ecosistema SENA, 2025.
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
