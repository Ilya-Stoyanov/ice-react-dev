import React, {useState} from 'react'
import productsList from './productsList';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';

const Product = () => {
  const [isActive, setIsActive] = useState("ICE CREAM");
  const [filterItems, setFilterItems] = useState(productsList)

  const handleFilter = category =>{
    setIsActive(category)
    if(category === "ICE CREAM") setFilterItems(productsList) 
    else{
      const filterItem = productsList.filter(item => item.category === category)
      setFilterItems(filterItem)
    }
  }
  return (
    <section className="product" id='products'>
      <motion.div className="container">
        <h2 className="inner-title product-title">Our Product</h2>
        <div className="product-list">
          {
          ["ICE CREAM", "CAYENNE CHOCOLATE", "CAKE BATTER", "CANDY CANE", "PLATTERS", "DESSERT"].map(category => (
            <button 
              className={`product-item ${isActive === category ? "active": "" }`}
              key={category}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))
          }
        </div>
        <motion.div className="product-block">
          <AnimatePresence>
            {filterItems.map(item => {
              return <Card key={item.id} item={item} />
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Product