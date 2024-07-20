import axios from "axios";

//MEDOTOS DE CONSUMO DE API

const obtenerPorCedula = async (cedula) => {

    const data = await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula}`).then(r => r.json());
    console.log(data)
    return data;


}


const obtenerPorCedulaAxios = async (cedula) => {


    //no necestia de await ya que se encuentra dentro de la funcionalidad
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula}`).then(r => r.data);


    console.log(data)
    return data;



}

const guardar = async (estudianteBody) => {
    const data = axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`, estudianteBody).then(r => r.data)


    console.log(data)
    return data;
}


const actualizar = async (cedula, estudianteBody) => {

    const data = axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`, estudianteBody).then(r => r.data)


    console.log(data)
    return data;

}



const actualizarParcial = async (cedula, estudianteBody) => {

    const data = axios.patch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`, estudianteBody).then(r => r.data)


    console.log(data)
    return data;

}


const elminar = async (cedula) => {
    axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.data)
    console.log(data)
    return data;

}

//METODOS DE CONSUMO DE FACHADA


export const obtenerPorCedulaFacade = async (cedula) => {

    return await obtenerPorCedula(cedula);

}


export const obtenerPorCedulaAxiosFacade = async (cedula) => {

    return await obtenerPorCedulaAxios(cedula);
}


export const guardarFacade = async (estudianteBody) => {
    
    return await guardarFacade(estudianteBody);
}


export const actualizarFacade = async (cedula, estudianteBody) => {

    return actualizar(cedula, estudianteBody);

}



export const actualizarParcialFacade = async (cedula, estudianteBody) => {
    return await actualizarParcial(cedula, estudianteBody);

}


export const elminarFacade = async (cedula) => {

    return await elminar(cedula);
}

