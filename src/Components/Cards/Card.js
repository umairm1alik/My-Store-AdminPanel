import React from 'react'
import useCard from './useCard'

export default function Card() {
    const [productFromStore, deleteProductHandler] = useCard();
    console.log(productFromStore);

    return (
        <div className='container mt-5'>
            <div className='row'>
                {productFromStore.map((product) => {
                    return (
                        <div className='col-md-3' class="card" style={{ width: "18rem" }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{product.title}</h5>
                                <p class="card-text">{product.description}</p>
                                <small>{product.price} Rs</small> <br />
                                <a onClick={() => deleteProductHandler(product.docId)} class="btn btn-primary">Delete Product</a>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}
