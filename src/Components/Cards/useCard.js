

import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { fetchProduct } from '../../Store/Actions/ProductAction'
import { deleteProduct } from '../../Store/Actions/ProductAction'

export default function useCard() {
    const [loader, setLoader]= useState(false)
    const dispatch=useDispatch();

    useEffect(() => {
        
        dispatch(fetchProduct(setLoader))

    }, [])


    let productFromStore= useSelector((store) => store.ProductReducer.products)

    const deleteProductHandler=(id) => {
        dispatch(deleteProduct(id))
    }
  return ([
      productFromStore, deleteProductHandler
  ])
}
