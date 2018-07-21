import {createStore, combineReducers} from "redux"; 
import cartReducer from "./redux-cart/state/cartReducer";

const rootReducer = combineReducers({
    items: cartReducer
})

const store = createStore(rootReducer);

//store.getState().items

export default store;