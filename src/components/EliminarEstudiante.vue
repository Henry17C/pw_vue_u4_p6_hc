vue <template>
    
    
   <div class="container">
    <h1>Eliminar Estudiante</h1>
   
        <label for="id">Cedula del estudiante</label>
        <input v-model="cedula" type="text" id="id" name="id">
        <button @click="eliminar">Eliminar</button>
    
   </div>


</template>

<script>
  import {elminarFacade} from "../clients/clientEstudiante.js";

export default {
   data(){
      return{
         cedula:""
      }
   },

   methods:{
      async eliminar(){
         console.log("Eliminando estudiante");
         const data= await elminarFacade(this.cedula);
      }
   }
    
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