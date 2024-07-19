vue <template>
    
    
   <div class="container">
    <h1>Eliminar Estudiante</h1>
     <form>
        <label for="id">Cedula del estudiante</label>
        <input type="text" id="id" name="id">
        <button type="submit">Eliminar</button>
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