<template>
   <div>
        <header class="bg-gray text-dark text-center py-5">
            <h1 class="display-4 mt-4">ESTAS EN LA PAGINA DE INICIO</h1>
            <b-button variant="primary" to="form">Ir al form</b-button>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </header>
        <div>
  </div>
</div>
  
</template>
  
<script>
export default {
  name: 'inicio',
  data() {
    return {
      items: [
        {
          text: "inicio",
          href: "/",
          name: 'inicio'
        },
        {
          text: "form",
          href: "/form",
          name: 'form'
        },
      ],
    }
  }
}
</script>
  
<style>
div {
  max-width: 1100px;
  margin: auto;
}
</style>