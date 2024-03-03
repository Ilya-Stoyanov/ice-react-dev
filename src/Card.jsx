import React from 'react'
import {motion} from "framer-motion"

const Card = ({item}) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
        <figure className="product-img"><img src={item.img} alt={item.title}/></figure>
        <div className="product-content">
        <span>{item.title}</span>
        <p>{item.text}</p>
        <ul className="product-price">
            <li className="price-new">{item.price}</li>
            <li className="price-old">{item.oldPrice}</li>
        </ul>
        <a href="" className="product-link">Buy Now</a>
        </div>
    </motion.div>
  )
}

export default Card