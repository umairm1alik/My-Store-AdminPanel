import {db} from "../../Config/Firebase"


import { ADD_PRODUCT } from "../../Constant/Type"


export const addProductAction= (data) => async(dispatch) => {
    try {
        let res=await  db.collection("Products").add(data)
        
        dispatch({
            type: ADD_PRODUCT,
            payload: data
        })
    } catch (error) {
        console.log("error in Action", error);
    }
}


export const fetchProduct = (setLoader) => async(dispatch) =>{
    try {
        setLoader(true)
        let productFetched=await db.collection("Products").get();
        let fetchedCartProduct=await db.collection("productInCart").get();
        let productsFromFirebase=[];
        let cartProductsFromFirebase=[];

        productFetched.forEach((doc) => {
            productsFromFirebase.push({
               docId: doc.id,
               ...doc.data() 
            })
        });

        fetchedCartProduct.forEach((doc) => {
            cartProductsFromFirebase.push({
               docId: doc.id,
               ...doc.data() 
            })
        });

        

        dispatch({
            type: "FETCH_PRODUCT",
            payload: {productsFromFirebase, cartProductsFromFirebase}
        })
    } catch (error) {
        
    }finally{
        setLoader(false)
    }
}

export const deleteProduct =(id) => async (dispatch) => {

    await db.collection("Products").doc(id).delete()

    dispatch({
        type: "DELETE_PRODUCT",
        payload: id
    })
}