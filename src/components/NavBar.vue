<template>
  <div>
    <router-link  to="/">Bienvenida</router-link >
    <router-link  to="/estudiante/actualiza/  created(){
      console.log(this.$route)
    }">Estudiante Actualizar</router-link >
    <router-link  to="/estudiante/inserta">Estudiante Crear</router-link >
    <router-link  to="/estudiante/elimina">Estudiante Eliminar</router-link >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  padding: 0px 30px;
  background: blue;
  
}

div a {
  color: blue;
  margin: 0px 10px;
  border: solid;
  border-radius: 30px;
  background: rgb(103, 226, 84);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: 20px;
}
</style>