<template>
 


  <!-- Este es un comentario en HTML
  <BienvenidaPage />  Ya no es neceraio ya que el router carga la pagina de inicio


-->

  <router-view/>

</template>

<script>
import BienvenidaPage from "./pages/BienvenidaPage.vue";

export default {
  name: "App",
  components: {
    BienvenidaPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
