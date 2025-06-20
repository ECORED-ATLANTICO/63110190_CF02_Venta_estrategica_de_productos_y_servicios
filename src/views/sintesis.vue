<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-2.col-md-5.mb-4.col-6
        figure
          img(src='@/assets/curso/img_01.png', alt='Imagen decorativa')
      .col-lg-10.mb-4
        p El componente Comercialización de productos y servicios permite al aprendiz comprender y aplicar conceptos fundamentales relacionados con la atención al cliente, los momentos de verdad, y los objetivos de venta. A través del estudio de estrategias y técnicas de ventas, así como del proceso comercial y sus fases, se fortalece la capacidad para interactuar con el cliente de manera efectiva. Este módulo ofrece herramientas prácticas que facilitan la construcción de relaciones sólidas y la toma de decisiones comerciales acertadas, enfocadas en satisfacer necesidades y lograr resultados positivos en el entorno de ventas. 

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
