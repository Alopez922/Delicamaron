const initialState = {
    recetas: [],
    allrecetas:[],
    camarones:[],
  };

  function rootReducer(state = initialState,action){
    switch(action.type){
        case "GET_RECETAS":
            return{
                ...state,
                recetas:action.payload,
                allrecetas:action.payload,
            }

      
        
            default:
                return state;
    }
  }

  export default rootReducer;