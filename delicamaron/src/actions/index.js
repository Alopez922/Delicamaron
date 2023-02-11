import axios from "axios";

export function getRecetas(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/recetas")

        return dispatch({
            type:"GET_RECETAS",
            payload:json.data
        })
    }
}

export function CreateFood(payload){
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/recetas",payload);
        return response
    }
}

export function getBebidas(){
    return async function(dispatch){
   let infobe = await axios.get("http://localhost:3001/bebidas")
   return dispatch({
    type:"GET_BEBIDAS",
    payload:infobe.data
   })
   }
}

export function createBebidas(payload){
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/bebidas",payload);
        return response
    }
}

