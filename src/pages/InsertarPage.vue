<template>
    <div class="container">
      <h1>Ingresar Estudiante</h1>
      <div class="form-grid">
        <label for="cedula">Cédula del estudiante</label>
        <input v-model="cedula" type="text" id="cedula" name="cedula" />
  
        <label for="nombre">Nombre del estudiante</label>
        <input v-model="nombre" type="text" id="nombre" name="nombre" />
  
        <label for="apellido">Apellido del estudiante</label>
        <input v-model="apellido" type="text" id="apellido" name="apellido" />
  
        <label for="fechaNacimiento">Fecha de Nacimiento del estudiante</label>
        <input
          v-model="fechaNacimiento"
          type="datetime-local"
          id="fechaNacimiento"
          name="fechaNacimiento"
        />
  
        <label for="genero">Género del estudiante</label>
        <select v-model="genero" id="genero" name="genero">
          <option value="" disabled selected>Seleccione un género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
  
        <button @click="guardar">Guardar</button>
   
      </div>
    </div>
  </template>
  
  <script>
  import { guardarFacade } from "../clients/clientEstudiante.js";
  
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
      async guardar() {
        const bodyEstudiante = {
          cedula: this.cedula,
          nombre: this.nombre,
          apellido: this.apellido,
          fechaNacimiento: this.fechaNacimiento,
          genero: this.genero,
        };
        try {
          const data = await guardarFacade(bodyEstudiante);
          console.log(data + "Guardado");
        } catch (error) {
          console.error(error);
        }
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
    padding: 20px;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    max-width: 600px;
    width: 100%;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input,
  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }
  
  .submit-btn {
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
  }
  </style>