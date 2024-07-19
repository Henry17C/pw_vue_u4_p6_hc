vue <template>
 
  <div class="container">
    <h1>Actualizar Estudiante</h1>
    <form>
    <label for="cedula">Cédula del estudiante</label>
    <input type="text" id="cedula" name="cedula">

    <label for="nombre">Nombre del estudiante</label>
    <input type="text" id="nombre" name="nombre">

    <label for="apellido">Apellido del estudiante</label>
    <input type="text" id="apellido" name="apellido">

    <label for="fechaNacimiento">Fecha de Nacimiento del estudiante</label>
    <input type="datetime-local" id="fechaNacimiento" name="fechaNacimiento">

    <label for="genero">Género del estudiante</label>
    <select id="genero" name="genero">
        <option value="" disabled selected>Seleccione un género</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
    </select>

    <button type="submit">Actualizar</button>
</form>
  </div>

</template>

<script>
export default {

}
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