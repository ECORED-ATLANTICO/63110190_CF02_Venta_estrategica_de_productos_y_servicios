<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-4.col-md-5.mb-4
        figure
          img(src='@/assets/curso/img_02.png', alt='Imagen decorativa')
      .col-lg-8.mb-4
        p.mb-2 La comercialización de productos y servicios es una actividad fundamental para el éxito de cualquier organización. A través de ella, las empresas logran conectar con sus clientes, satisfacer sus necesidades y generar valor. Este proceso va más allá de la simple venta, ya que incluye la planificación de estrategias, el conocimiento del mercado, la atención al cliente y la aplicación de técnicas que favorecen una experiencia positiva para el consumidor.
        p.mb-0 Este componente formativo ofrece a los aprendices las herramientas necesarias para comprender y aplicar conceptos clave como el servicio al cliente, los momentos de verdad, los objetivos de venta, y las estrategias y técnicas comerciales. Además, se exploran las fases del proceso de venta, permitiendo desarrollar habilidades prácticas que fortalecen el desempeño en entornos laborales y comerciales reales.

   
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/32KQw66yGbY?si=9ufc5FlxjfV092T8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Nota: Sena (2024).  

    
</template>

<script>
export default {
  name: 'Introduccion',
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
