import {createStore, combineReducers, applyMiddleware} from "redux"; 
import cartReducer from "./redux-cart/state/cartReducer";
import productReducer from "./redux-cart/state/productReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    items: cartReducer,
    product: productReducer
})

//logger middleware
function loggerMiddleware(store){
    return function (nextFn) {
        return function (action) {
            console.log("logger", action);

            // if(action.type == "CART.EMPTY_ACTION")
            //    return false;

            let result = nextFn(action);
            return result;
        }
    }
}

const store = createStore(rootReducer, //reducers
                        {items: []},//seed data
                        applyMiddleware(loggerMiddleware, thunk)); //middle ware

//store.getState().items

export default store;