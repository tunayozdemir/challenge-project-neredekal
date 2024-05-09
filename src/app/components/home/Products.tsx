"use client"
import React from 'react'
import { ProductCart } from '../../components'

interface Pokemon {
  id: number;
  text: string;
  details: [];
  name: string;
}

interface PokemonProps {
  items: Pokemon[];
}

const Products: React.FC<PokemonProps> = ({ items }) =>  {

  console.log('items :', items)

  return (
    <div>
      <div className='flex items-center justify-center flex-wrap gap-20 md:gap-10 px-3 md:px-10 mt-20'>
        {items.map((poke, index) => (
          <ProductCart key={index} items={poke} />
        ))}
      </div>
    </div>
  )
}

export default Products