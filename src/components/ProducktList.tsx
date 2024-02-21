import React from 'react'
import { Product } from '../types/Product'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import ProductItem from './productItem/ProductItem'


export default function ProducktList() {
    const product=useSelector((store:RootState)=>store.product.list)
  return (
    <div>
        {
            product.map(prod=><ProductItem key={prod.id} {...prod}/>)
        }
    </div>
  )
}