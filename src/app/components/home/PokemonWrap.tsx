"use client"
import React from 'react'
import { ProductCart } from '..'

interface Pokemon {
  id: number;
  name: string;
  details: {
    id: number;
    name: string;
    sprites: { front_default: string; };
    abilities: { ability: { name: string; }; }[];
    types: { type: { name: string; }; }[];
  };
}

interface PokemonProps {
  items: Pokemon[];
}

const PokemonWrap: React.FC<PokemonProps> = ({ items }) => {

  return (
    <div>
      <div className='flex items-center justify-center flex-wrap gap-10 px-3 mt-20'>
        {items.map((poke, index) => (
          <ProductCart key={index} array={poke} />
        ))}
      </div>
    </div>
  )
}

export default PokemonWrap