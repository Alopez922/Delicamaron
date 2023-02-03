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

