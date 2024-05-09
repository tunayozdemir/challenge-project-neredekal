"use client"
import React from 'react'
import { ProductCart } from '..'

interface Pokemon {
  id: number;
  text: string;
  details: [];
  name: string;
  items:[]
}

interface PokemonProps {
  items: Pokemon[];
}

const PokemonWrap: React.FC<PokemonProps> = ({ items }) =>  {

  return (
    <div>
      <div className='flex items-center justify-center flex-wrap gap-10 px-3 mt-20'>
        {items.map((poke, index) => (
          <ProductCart key={index} items={poke} />
        ))}
      </div>
    </div>
  )
}

export default PokemonWrap