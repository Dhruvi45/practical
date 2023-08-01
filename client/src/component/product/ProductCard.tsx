import React from 'react'
import { Button } from 'react-bootstrap'
import '../../assets/style/productCard.css'
import { useNavigate } from 'react-router-dom'

interface Props{
    product:any
}

export default function ProductCard(props:Props) {
  const { product } = props
  const nevigate = useNavigate()
  return (

    <div className='productCard'>
      <div>
        <img src={require(`../../assets/images/${product.title}.jpg`)} alt={`${product.title}`}className='productImg' />
      </div>
      <div className='productDetail'>
        <h1>{product.title}</h1>
        <p><b>Prise: </b>{product.price}</p>
        <p><b>Author: </b>{product.author}</p>
        <p><b>Language: </b>{product.Language}</p>
        <p><b>Rating: </b>{product.rating}</p>
        <Button onClick={() => nevigate(`/product/${product._id}`)}>View</Button>
      </div>
    </div>
  )
}