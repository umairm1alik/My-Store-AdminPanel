

import React from 'react'
import {useSelector} from 'react-redux'

export default function useOrder() {
    const orderFromStore = useSelector((store) => store.ProductReducer.orders)
  return (
    [orderFromStore]
  )
}
