import axios from "axios"
import { useState } from "react"
import '../CSS/pagination.css';
import Produc from "../Feature/Products";
import { Products } from "../Interface/types.js"
import ProductPagination from "../Feature/ProductPagination";

function ProductName(){

    let [products,setProducts] = useState(Array<Products>)
    const [currentPage,setCurrentPage] = useState(1)
    const [productsPerPage,setProductsPerPage] = useState(2)

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
const indexOfLastProduct = currentPage * productsPerPage
const indexOfFistProuct = indexOfLastProduct -productsPerPage
const currentProduct = products.slice(indexOfFistProuct,indexOfLastProduct)

const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

return(
    <div>
          <input id="nameForm" className="form-control" placeholder="Item Name"/>
        <button onClick={getProducts}>Submit</button>
        
        <Produc product={currentProduct}/>
        <ProductPagination productsPerPage={productsPerPage} totalProduct={products.length} pagination={paginate}/>
    </div>
)
}

export default ProductName
    