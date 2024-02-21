import React from 'react'
import { Product } from '../../types/Product'
import { loadProduct } from '../../store/slice/sliceProduckt';
import { RootDispatch, RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import s from "./style.module.css" 




export default function ({id,category,description,image,price,rating,title}:Product) {
    const dispatch = useDispatch<RootDispatch>();
  return (
    <div className={s.item}>
        <div className={s.part1}>
            <h3>{id}</h3>
            <p>Category:{category}</p>
        </div>
            <h2 className={s.title}>{title}</h2>
        <div className={s.part2}>
            <img  src={image} alt="image"/>
            <div>
            <p>{description}</p>
            <h3><i>Price:</i> {price}</h3>
            </div>
        </div>
        
    </div>
  )
}