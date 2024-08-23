import React from 'react'

export const ProductPagination = ({productsPerPage,pagination,totalProduct}) => {
    let pageNumbers =[]

    for(let i=1;i<=Math.ceil(totalProduct/productsPerPage);i++){
        pageNumbers.push(i)
    }
  return (
  
    <div className='container'>
 {pageNumbers.map(number=>(
            <div key = {number} className='pagination'>
            <a onClick={()=>pagination(number)} href="#">{number}</a>
</div>
        ))}
    </div>
   
   

  )
}
export default ProductPagination