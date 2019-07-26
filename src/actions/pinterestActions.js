import axios from 'axios';
import {BUSCAR} from '../types/pinterestTypes';


export function buscar(id){
    const request= axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return{
        type:BUSCAR,
        payload:request
    }
}