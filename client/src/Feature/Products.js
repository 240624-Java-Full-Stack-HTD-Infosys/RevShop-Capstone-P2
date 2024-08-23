import React from "react"



let Produc = ({product})=>{
    return(
    
       product.map(p => (
            <div key={p.productId}>
              <p>Product: {p.productId}</p>
              <p>Name: {p.name}</p>
              <p>Product Description: {p.description}</p>
            <p>Price: {p.price}</p>
            <p>Stock: {p.stock}</p>
            {/*
            <p>Category Name: {p.category.name}</p>
            <p>Seller Name: {p.seller.username}</p>
           */}
            </div>
          ))
    )

}

export default Produc