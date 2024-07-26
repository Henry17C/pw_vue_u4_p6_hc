<template>
 
  <div class="container">
    <h1>Actualizar Estudiante</h1>
 
    <label for="cedula">Cédula del estudiante</label>
    <input v-model="cedula" type="text" id="cedula" name="cedula">

    <label for="nombre">Nombre del estudiante</label>
    <input v-model="nombre" type="text" id="nombre" name="nombre">

    <label for="apellido">Apellido del estudiante</label>
    <input  v-model="apellido" type="text" id="apellido" name="apellido">

    <label for="fechaNacimiento">Fecha de Nacimiento del estudiante</label>
    <input v-model="fechaNacimiento" type="datetime-local" id="fechaNacimiento" name="fechaNacimiento">

    <label for="genero">Género del estudiante</label>
    <select v-model="genero" id="genero" name="genero">
        <option value="" disabled selected>Seleccione un género</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
    </select>

    <button @click="actualizar">Actualizar</button>
    <button @click="consultar">Buscar</button>

  </div>

</template>

<script>
import {actualizarFacade,obtenerPorCedulaAxiosFacade} from "../clients/clientEstudiante.js";
export default {
  data() {
    return {
      cedula: "",
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      genero: "",
    };
  },
 methods: {
    async actualizar() {
      const bodyEstudiante = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
        genero: this.genero,
      };

      try {
        const data = await actualizarFacade(this.cedula, bodyEstudiante);
        console.log(data+ "Actualizado");
      } catch (error) {
        console.error(error);
      }
    },
    async consultar() {
      console.log("Ingresa a buscar");
      const data = await obtenerPorCedulaAxiosFacade(this.cedula);
      console.log(data);
      this.cedula = data.cedula;
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fechaNacimiento = data.fechaNacimiento;
      this.genero = data.genero;
    },

  

  },




};
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>