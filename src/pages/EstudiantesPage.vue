vue <template>
  
  <h1>Pagina de Estudiantes</h1>
    <InsertarEstudiante />
    <ActualizarEstudiante />
    <EliminarEstudiante />

</template>

<script>
 import InsertarEstudiante from '../components/InsertarEstudiante.vue'
 import ActualizarEstudiante from '../components/ActualizarEstudiante.vue'
 import EliminarEstudiante from '../components/EliminarEstudiante.vue'
export default {
    components: {
    InsertarEstudiante,
    ActualizarEstudiante,
    EliminarEstudiante
  }
   

}
</script>

<style>

</style>