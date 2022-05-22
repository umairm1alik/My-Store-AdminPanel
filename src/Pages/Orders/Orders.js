import React from 'react'
import useOrder from './useOrder'
export default function Orders() {
  const [orderFromStore] = useOrder()
  return (
    <div className='container mt-5'>
            <div className='row'>
                {orderFromStore.map((product) => {
                    return (
                        <div className='col-md-3' class="card" style={{ width: "18rem" }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{product.title}</h5>
                                <p class="card-text">{product.description}</p>
                                <small>{product.price} Rs</small> <br />
                                <a class="btn btn-primary">Remove from Order</a>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
  )
}
