import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react"
import '../CSS/pagination.css';
import { Route } from "react-router-dom";

    interface User {
    userId: number;
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    type: string;
    businessDetails?: string;
    banned: boolean;
 
}
    interface Products {
    productId: number;
    seller: User;
    name: String;
    description: string;
    price: number;
    stock: number;
   img_url: string;
    category: Category; 
}
 
 interface Category {
    categoryId: number;  
    name: string;        
    products: Products[];
}

function ProductName(){
    let nameForm: HTMLInputElement = document.getElementById('nameForm') as HTMLInputElement;
    let [products,setProducts] = useState(Array<Products>)
    
    async function allProducts(){
    
        const url = "http://localhost:7777/products/keyword"
        try {
            
            let response = await axios(url, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
                
                }
            );
    
          
           setProducts(response.data)
           
        } catch (error: any) {
            console.error(error.message);
        }
}


return(

        <div>
          
         <input id="nameForm" className="form-control" placeholder="Item Name"/>
        
        {products.map((p,index) => (
        <div key={index}>
          
          <p>Product: {p.productId}</p>
          <p>Name: {p.name}</p>
          <p>Product Description: {p.description}</p>
        <p>Price: {p.price}</p>
        <p>Stock: {p.stock}</p>
        {/*}
        <p>Category Name: {p.category.name}</p>
        <p>Seller Name: {p.seller.username}</p>
       */}
        </div>
      ))}
        </div>
    
  
   
)
}

export default ProductName
    