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

// export function getCamaron(payload){
//     return{
//         type:"GET_CAMARON",
//         payload:payload
//     }
// }

