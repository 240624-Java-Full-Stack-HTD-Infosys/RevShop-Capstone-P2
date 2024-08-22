import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react"
import { Products } from "../Interface/types.js"

function Product(){
   
    let [product,setProduct] = useState(Array<Products>)
    
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
      {product.map((p,index) => (
        <div key={index}>
          <p>Product: {p.productId}</p>
          <p>Name: {p.name}</p>
          <p>Product Description: {p.description}</p>
        <p>Price: {p.price}</p>
        <p>Stock: {p.stock}</p>
        <p>Category Name: {p.category.name}</p>
        <p>Seller Name: {p.seller.username}</p>
        
        </div>
      ))}
    </div>
  );
}


export default Product