import axios from 'axios';
import {BUSCAR,CARGANDO,ERROR} from '../types/loginTypes';

export const buscar =() => async (dispatch)=>{
    dispatch({
        type:CARGANDO
    });
    try{
        const respuesta = await axios.get(`https://rickandmortyapi.com/api/character/`)
        const answer = {...respuesta};
        const an2= answer.data
        // const an3 = {...an2.results}

        const tareas ={};
        an2.results.map((tar)=>(tareas[tar.id]={...tareas[tar.id],[tar.id]:{...tar}}))
        
        dispatch({
            type: BUSCAR,
            payload: tareas
        })
        console.log(tareas)

    }catch(error){
        
        console.log(error.message);
        dispatch({
            type:ERROR,
            payload:'Esta fallando el loading'
        })
    }
}
