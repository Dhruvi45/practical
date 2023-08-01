import React, { useEffect, useState } from 'react'
import ProductCard from '../../component/product/ProductCard'
import { axiosGet } from '../../utils/helper'

export default function ProductList() {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    axiosGet("/product/getAllProductList")
    .then((res) => {
      console.log("res", res.data)
    })
    .catch((e)=>{
      console.log("e",e);      
    })
  }, [])

  return (
    <>
      <div >
        {productList.map((product, index) => {
          return (
            <ProductCard product={product} />
          )
        })}
      </div>
    </>
  )
}
