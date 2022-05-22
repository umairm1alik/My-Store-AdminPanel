import React from 'react'
import { ADD_PRODUCT } from '../../Constant/Type';

const initialState={
    products:[''],
    orders:['']
}

export default function ProductReducer(state= initialState, actions) {
  
    switch (actions.type) {
        case ADD_PRODUCT:{
            let newProduct=[...state.products, actions.payload]
            return{
                ...state,
                products: newProduct
            }
        }

        case "FETCH_PRODUCT":{
            return{
                ...state,
                products: actions.payload.productsFromFirebase,
                orders: actions.payload.cartProductsFromFirebase
            }
        }

        case "DELETE_PRODUCT": {
            let afterDelete=state.products.filter((product) => product.docId !== actions.payload);
            return{
                ...state,
                products: afterDelete
            }
        }

            
            
    
        default:
            return state;
    }
}
