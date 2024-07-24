vue <template>
  <InsertarEstudiante />

  <ActualizarEstudiante />

  <EliminarEstudiante />
</template>

<script>
import InsertarEstudiante from "../components/InsertarEstudiante.vue";
import ActualizarEstudiante from "../components/ActualizarEstudiante.vue";
import EliminarEstudiante from "../components/EliminarEstudiante.vue";
export default {
  components: {
    InsertarEstudiante,
    ActualizarEstudiante,
    EliminarEstudiante,
  },
};
</script>

<style>
</style>