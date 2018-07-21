// contains all action creators for redux-cart module
import * as ActionTypes from "./action-types";

// export function addItem(item){
//     return{
//         type:ActionTypes.ADD_ITEM,
//         payload:{
//             item
//         }
//     }
// }

export const addItem = (item) =>{
    return{
        type:ActionTypes.ADD_ITEM,
        payload:{
            item
        }
    }
}

export const removeItem = (id) => ({
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            id
        }
})

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {
        id,
        qty
    }
})

export const empty = () => ({
    type: ActionTypes.EMPTY_CART
})