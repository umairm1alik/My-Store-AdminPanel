import React from 'react'

import useProduct from './useProduct'
import Card from "../../Components/Cards/Card"


export default function Products() {
    
    const [setProductTitle, setProductDesc, setProductPrice, setProductImg, addProduct, productTitle, productDesc,  productPrice]=useProduct();
    return (
        <div>
            {/* <!-- Button to Open the Modal --> */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                Add Product
            </button>

            {/* <!-- The Modal --> */}
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div class="modal-header">
                            <h4 class="modal-title">Add Product</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div class="modal-body">
                            <input type="text" value={productTitle} placeholder="Enter Product Name" onChange={(e) => setProductTitle(e.target.value)}/><br/>
                            <input type="text" value={productDesc} placeholder="Enter Product Description" onChange={(e) => setProductDesc(e.target.value)}/><br/>
                            <input type="text" value={productPrice} placeholder="Enter Product price" onChange={(e) => setProductPrice(e.target.value)}/><br/>
                            <input type='file' onChange={(e) => setProductImg(e.target.files[0])}/>
                            <button  >Upload</button>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success" onClick={addProduct}>Submit</button>
                            
                        </div>

                        

                    </div>
                </div>
            </div>
            <h1>Products in Stock</h1>
            <Card/>
        </div>
    )
}
