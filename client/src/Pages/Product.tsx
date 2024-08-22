import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Products } from "../Interface/types.js";
import '../CSS/wProduct.css'

function Product(){
   
    let [product,setProduct] = useState(Array<Products>)
    const navigate = useNavigate(); 

    useEffect(() => {
    async function allProducts(){
        const url = "http://localhost:7777/products/test";
        
        try {
            let response = await axios(url, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
           console.log(response.data);
           setProduct(response.data)
           
        } catch (error: any) {
            console.error(error.message);
        }
       
    }
    allProducts()
}, []);

function handleProductDetail(productId: number) {
    navigate(`/product/${productId}`);
}

/*
return(
    <>{
        product.map((p,index = 0)=>{
        return(
         <div key = {index}>
          <p>Product: {p.productId} </p>
          <p>Name: { p.name}</p>
          <p> Product Description: {p.description}</p>
         </div>
        )
        })
    }
 
    </>
)
    */
return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category Name</th>
            <th>Seller Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((p, index) => (
            <tr key={index}>
              <td>{p.productId}</td>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
              <td>{p.category.name}</td>
              <td>{p.seller.username}</td>
              <td>
                <button onClick={() => handleProductDetail(p.productId)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default Product