<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Proceso de venta

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.bg-07
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img_01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p En el mundo comercial, toda venta exitosa comienza con un proceso bien estructurado. Este sistema organizado de acciones no es arbitrario: surge directamente del concepto fundamental de lo que significa vender en el mercado actual.  

    separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_6_1 6.1 Concepto
   
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-2.col-md-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema6/img_02.svg', alt='Imagen decorativa').mx-auto.w-75-movil
      .col-lg-10.mb-4
        p La venta es un proceso de intercambio en el cual un vendedor ofrece un producto o servicio a un cliente a cambio de un valor, generalmente económico. No se trata únicamente de entregar un bien, sino de identificar necesidades, generar confianza y construir relaciones duraderas con el cliente. La venta efectiva combina técnicas de comunicación, conocimiento del producto y comprensión del comportamiento del consumidor para lograr resultados sostenibles (Kotler & Armstrong, 2018).

        .row.justify-content-center.align-items-center
          .col-lg-2.col-md-5.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img_03.png', alt='Imagen decorativa').mx-auto

          .col-lg-10.mb-4
            p El proceso de venta es un conjunto de etapas estructuradas que guían al vendedor desde la identificación de un posible cliente hasta el cierre exitoso de una transacción. Este proceso no solo busca lograr una venta, sino también garantizar que las necesidades del cliente sean satisfechas, fomentando así la fidelización (Jobber & Lancaster, 2017). 

    separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_6_2 6.2 Fases

    .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")

      .col-lg-12.mb-4
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema6/img_04.png', alt='Imagen decorativa')
          div.texto-tarjeta
            p.mb-0 El proceso de venta se compone de una serie de etapas que guían la relación entre el vendedor y el cliente, desde el primer contacto hasta el cierre del negocio. Cada fase cumple un propósito específico que permite avanzar de forma ordenada hacia una venta efectiva, garantizando que se comprendan y satisfagan las necesidades del cliente. Seguidamente, se describe el proceso según sus fases:

    .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")
      .col-md-12.col-lg-10.mb-4
        TabsA.color-acento-botones
          .tarjeta.color-aecnto-botones--borde.p-4(titulo="Prospección").bg-06
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.mb-4
                p.mb-0 Consiste en buscar y seleccionar clientes potenciales. Por ejemplo, una empresa de telefonía identifica a jóvenes profesionales como clientes ideales para sus planes de datos móviles.
              .col-md-4.col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema6/img_05.svg', alt='Imagen decorativa').mx-auto.w-75
            
          .tarjeta.color-aecnto-botones--borde.p-4(titulo="Calificación").bg-06
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.mb-4
                p.mb-0 Se evalúa si el prospecto tiene el interés, la necesidad, y los recursos para adquirir el producto. Por ejemplo, si el prospecto está buscando cambiar de proveedor y tiene la capacidad económica.
              .col-md-4.col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema6/img_06.svg', alt='Imagen decorativa').mx-auto.w-75

          .tarjeta.color-aecnto-botones--borde.p-4(titulo="Presentación").bg-06
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.mb-4
                p.mb-0 El vendedor muestra el producto o servicio resaltando los beneficios que mejor satisfacen las necesidades del cliente. Por ejemplo, destaca la cobertura, la velocidad de navegación y el precio competitivo del plan telefónico.
              .col-md-4.col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema6/img_07.svg', alt='Imagen decorativa').mx-auto.w-75

          .tarjeta.color-aecnto-botones--borde.p-4(titulo="Cierre").bg-06
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.mb-4
                p.mb-0 Es el momento en el que se concreta la venta. Puede incluir la firma de un contrato, la entrega del producto o la activación del servicio. Aquí es crucial asegurar la claridad del acuerdo y la satisfacción del cliente.
              .col-md-4.col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema6/img_08.svg', alt='Imagen decorativa').mx-auto.w-75
      
    .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")
      .col-lg-10.mb-4
        .titulo-sexto.mb-4
          h5 Figura 3. 
          span.text-dark Proceso de venta 

        figure.mb-4
          figure.mb-3
            img(src='@/assets/curso/temas/tema6/img_09.svg', alt='Texto que describa la imagen').mx-auto.mostrar
            img(src='@/assets/curso/temas/tema6/img_10.svg', alt='Texto que describa la imagen').mx-auto.ocultar

          figcaption 
            b Fuente: 
            |  SENA, 2025.

    separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_6_3 6.3	Ruta de venta
   
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in").ordenar_div
      .col-md-12.col-lg-8.mb-4
        p.mb-3 En el contexto comercial, las rutas en el proceso de venta hacen referencia a los trayectos planificados que siguen los vendedores para contactar, atender y cerrar negocios con los clientes. Estas rutas pueden tener un enfoque geográfico (por zonas o territorios) o funcional (por etapas del proceso comercial), y buscan optimizar los recursos, reducir tiempos muertos y mejorar la cobertura del mercado (Kotler & Keller, 2016).
        p.mb-3 El diseño adecuado de una ruta de ventas permite al equipo comercial estructurar su labor diaria de forma más eficiente, asegurando que se prioricen los clientes según su potencial de compra, frecuencia de visita o ubicación. En consecuencia, estas rutas se convierten en una herramienta clave para la planificación estratégica de la gestión comercial (Blythe, 2012).

        .tarjeta.bg-03.p-3
          .row.justify-content-center.align-items-center.ordenar_div
            .col-lg-2.col-md-3.mb-4
              figure
                img(src='@/assets/curso/temas/tema6/img_010.svg', alt='Imagen decorativa').mx-auto.w-50
            .col-lg-10.col-md-9
              p.mb-0 Para lograr una gestión comercial efectiva, es fundamental conocer las diferentes formas de acercarse al cliente. A continuación, se presentan los principales tipos de rutas en el proceso de venta:

      .col-lg-4.col-md-5.mb-4.arriba
        figure
          img(src='@/assets/curso/temas/tema6/img_11.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img_12.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Ruta  física o territorial
            p.mb-2.p-movil Este tipo de ruta está basada en el desplazamiento del vendedor por zonas geográficas específicas. Se utiliza especialmente en ventas directas, distribución minorista o ventas al por mayor. El objetivo es cubrir un territorio asignado de forma sistemática, visitando clientes actuales y potenciales según una programación regular.
            p.mb-0.p-movil Las rutas territoriales facilitan una cobertura equilibrada del mercado y permiten establecer relaciones más cercanas con los clientes. Además, contribuyen a reducir costos de transporte y aumentar la frecuencia de contacto con los compradores (Kotler & Keller, 2016).


      .col-xl-4.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img_13.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Ruta digital o virtual
            p.mb-2.p-movil Con el auge de las tecnologías de la información, muchos procesos de venta han migrado al entorno digital. En este caso, la ruta de venta se organiza a partir de interacciones virtuales, como correos electrónicos, mensajes por WhatsApp, llamadas telefónicas o videoconferencias.
            p.mb-0.p-movil Esta modalidad es especialmente útil cuando los clientes están dispersos geográficamente o cuando el producto o servicio se puede ofrecer sin presencia física. Además, permite realizar seguimiento y acompañamiento de manera más continua, incluso fuera del horario tradicional de oficina (Jobber & Lancaster, 2015).

      .col-xl-4.col-lg-7.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img_14.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Ruta mixta
            p.mb-2.p-movil Combina elementos de la ruta física y la digital. El vendedor puede iniciar el contacto con el cliente a través de medios virtuales y, en una fase posterior, concretar una visita presencial. Esta estrategia permite aprovechar lo mejor de ambos mundos, generando un equilibrio entre la eficiencia digital y la cercanía del contacto físico.
            p.mb-0.p-movil Las rutas mixtas son útiles en procesos de venta consultiva, donde es importante identificar necesidades por medios remotos y luego cerrar acuerdos en persona (Blythe, 2012).
      

    .row
      .col-12.col-lg-10.bgblue.p-5.mx-auto.mb-5.position-relative
        .row
          .col-12.col-lg-10.text-white
            p.mb-0 Una ruta de ventas efectiva se caracteriza por estar bien planificada y estructurada, pero también ser lo suficientemente flexible para adaptarse a cambios. Debe enfocarse en la rentabilidad, optimizando tiempo y recursos, y centrarse en los clientes con mayor potencial. Además, debe ser medible, permitiendo el seguimiento de resultados a través de indicadores claros como visitas, ventas y tiempos de atención.
          .col-2.d-none.d-lg-block
            figure.position-absolute.iconoutside
              img(src="@/assets/curso/temas/tema6/img_23.png", alt="alt").w-auto


    .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")
      .col-lg-10.mb-4
        .titulo-sexto.mb-4
          h5 Figura 4. 
          span.text-dark Características de una ruta de venta efectiva 

        figure.mb-4
          figure.mb-3
            img(src='@/assets/curso/temas/tema6/img_15.svg', alt='Texto que describa la imagen').mx-auto.mostrar
            img(src='@/assets/curso/temas/tema6/img_16.svg', alt='Texto que describa la imagen').mx-auto.ocultar

          figcaption 
            b Fuente: 
            |  SENA, 2025.

    separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_6_4 6.4 Ejemplo


    .row.justify-content-center.align-items-center.my-3.mb-0(data-aos="zoom-in")
      p A continuación, se presenta un ejemplo práctico para ilustrar el proceso de ventas en un contexto real. Se trata de la comercialización de un sistema de paneles solares a una finca agroecológica, donde el asesor busca ofrecer una solución sostenible y adaptada a las necesidades del cliente. Este caso permitirá analizar paso a paso las distintas fases que componen una venta consultiva.

    .row.justify-content-center.align-items-center.my-3.mb-0(data-aos="zoom-in")
      .col-lg-8
       

        SlyderF.custom.mb-5(columnas="col-md-6 col-lg-6 col-xl-6")
          .tarjeta.tarjeta--slyder.p-4.bg-06
            .row.justify-content-center.mb-3
              .col-md-5.col-4
                img(src="@/assets/curso/temas/tema6/img_17.svg", alt="alt").img100.mx-auto.mb-4
                h4.text-white.bg-07.w-content.p-2.mx-auto Fase 1
            h5.text-center.mb-0 Prospección
            p.text-center.mb-0 Carlos asiste a una feria de agroindustria en Montería y encuentra una finca llamada Montebello, que cultiva aguacate de manera orgánica y ha ganado reconocimientos por su modelo sostenible. Anota sus datos y programa una visita.

          .tarjeta.tarjeta--slyder.p-4.bg-06
            .row.justify-content-center.mb-3
              .col-md-5.col-4
                img(src="@/assets/curso/temas/tema6/img_18.svg", alt="alt").img100.mx-auto.mb-4
                h4.text-white.bg-07.w-content.p-2.mx-auto Fase 2
            h5.text-center.mb-0 Calificación
            p.text-center.mb-0 Durante la visita, Carlos verifica que la finca tiene un alto consumo eléctrico, acceso constante al sol y un interés genuino en reducir su huella ecológica. Además, identifica que cuentan con recursos financieros y están abiertos a nuevas tecnologías.

          .tarjeta.tarjeta--slyder.p-4.bg-06
            .row.justify-content-center.mb-3
              .col-md-5.col-4
                img(src="@/assets/curso/temas/tema6/img_19.svg", alt="alt").img100.mx-auto.mb-4
                h4.text-white.bg-07.w-content.p-2.mx-auto Fase 3
            h5.text-center.mb-0 Presentación
            p.text-center.mb-0 Carlos realiza una presentación personalizada: explica cómo el sistema de paneles solares puede reducir el 70 % del consumo eléctrico, destaca el ahorro proyectado en 5 años y muestra casos exitosos de otras fincas similares. También entrega una simulación financiera con retorno de inversión.

          .tarjeta.tarjeta--slyder.p-4.bg-06
            .row.justify-content-center.mb-3
              .col-md-5.col-4
                img(src="@/assets/curso/temas/tema6/img_20.svg", alt="alt").img100.mx-auto.mb-4
                h4.text-white.bg-07.w-content.p-2.mx-auto Fase 4
            h5.text-center.mb-0 Cierre
            p.text-center.mb-0 Luego de resolver algunas dudas sobre el mantenimiento y la garantía, el propietario de Montebello acepta la propuesta. Se firma el contrato y se programa la instalación para el mes siguiente.
      .col-md-5.col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema6/img_16.png", alt="alt").img400.mx-auto.w-75-movil

    .row.justify-content-center.align-items-center.my-3.mb-0(data-aos="zoom-in")

      .col-lg-10
        p Este caso muestra cómo una venta consultiva, con enfoque en las necesidades del cliente y la sostenibilidad, puede recorrer todo el proceso estructurado de forma efectiva.
        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.align-items-center
            .col-md-4.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema6/img_21.png', alt='Imagen decorativa').mx-auto.w-75-movil
            .col-lg-8
              p.mb-5 Lo invitamos a escuchar el podcast “Charlas que venden” con el episodio “La ruta de venta efectiva”, donde el instructor Carlos y el aprendiz Kevin te enseñan, con humor y ejemplos prácticos, cómo planificar y ejecutar una ruta de ventas que realmente da resultados. ¡Aprende y diviértete mientras fortaleces tus habilidades comerciales!
              
              TarjetaAudio.color-primario.mb-3(
                texto="Charlas que venden  "
                :audio="require('@/assets/curso/podcast/CF02_63110190_Venta_estrategica_de_productos_y_servicios.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

</template>

<script>
export default {
  name: 'Tema6',
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
