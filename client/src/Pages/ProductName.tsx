import axios from "axios"
import { useState } from "react"
import '../CSS/pagination.css';
import Produc from "../Feature/Products";
import { Route } from "react-router-dom";
import { Products } from "../Interface/types.js"

function ProductName(){

    let [products,setProducts] = useState(Array<Products>)
    
function getProducts(){

    async function allProducts(){

        let nameForm: HTMLInputElement = document.getElementById('nameForm') as HTMLInputElement;
        const url = "http://localhost:7777/products/keyword/"+nameForm.value;
      
        try {
            let response = await axios.get(url,{
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            
           console.log(response.data);
           setProducts(response.data)
           
        } catch (error: any) {
            console.error(error.message);
        }
       
    }
        allProducts()
      
}


return(
    <div>
          <input id="nameForm" className="form-control" placeholder="Item Name"/>
        <button onClick={getProducts}>Submit</button>
        
        <Produc product={products}/>
    </div>
)
}

export default ProductName
    