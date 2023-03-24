const ADD_CART = 'ADD_CART'
const REMOVE_CART = 'REMOVE_CART'

export const populateCart = (produceId)=>{
    return {
      
        type: ADD_CART,
        produceId
    }
}

export const removeCart = (produceId)=>{
    return {
      
        type: REMOVE_CART,
        produceId
    }
}

export default function cartReducer(state={},action){
    const newState = {...state};
    switch(action.type){
        case ADD_CART: 
        if (newState[action.produceId]){
            newState[action.produceId].count++
        }else{
            
            newState[action.produceId] = {id:action.produceId,count:1}
        }return newState
        case REMOVE_CART:
            if (newState[action.produceId] && newState[action.produceId].count >0){
                newState[action.produceId].count--
            }

        return newState
        default:
        return state;
        


        
    }
}