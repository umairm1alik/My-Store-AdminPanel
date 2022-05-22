import React from 'react'

import { useState } from 'react' 
import { useDispatch } from 'react-redux'

import { addProductAction } from '../../Store/Actions/ProductAction'


export default function useProduct() {
    const [productTitle, setProductTitle] = useState('')
    const [productDesc, setProductDesc] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productImg, setProductImg] = useState('')
    const dispatch = useDispatch()

    const addProduct=() =>{
        let newProduct={
            title: productTitle,
            description: productDesc,
            price: productPrice
             
        }

        dispatch(addProductAction(newProduct))
        setProductTitle('');
        setProductDesc('');
        setProductImg('');

    }

    
  return (
    [setProductTitle, setProductDesc, setProductPrice, setProductImg, addProduct, productTitle, productDesc,  productPrice]
  )
}
