import React from 'react'
import ProductCard from './ProductCard.jsx';


export default function ProductList({ sebData }) {
  console.log(sebData)
  return (
    <div className='card-container'>
      {sebData.map(product =>
        <ProductCard
          // sebData={sebData}
          key={product.id}
          id={product.id}
          image={product.image}
          category={product.category}
          name={product.name}
          price={product.price}
        />
      )}
    </div>
  )
}

