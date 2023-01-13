import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import  axios from 'axios'
function ProductPage() {

  const [product, setProduct] = useState({})
  const params = useParams()

  useEffect(() => {
    const id = params.id

    axios.get("https://fakestoreapi.com/products/" + id).then(response => {
      setProduct(response.data)
    })

  })

  return (
    <div>
       <h2> {product.title} </h2>
       <h2> {product.price} </h2>
       <h2> {product.description} </h2>
    </div>
  )
}

export default ProductPage