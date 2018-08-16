import { combineReducers } from 'redux';

import productsReducer from "./productsReducer";

let combinedReducer=combineReducers({
    // редьюсер productsReducer отвечает за раздел state под именем products
    products: productsReducer,     
    // + другие редьюсеры
});

export default combinedReducer;