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

        case "CREATE_FOOD":
            return{
                ...state,
              }

      
        
            default:
                return state;
    }
  }

  export default rootReducer;