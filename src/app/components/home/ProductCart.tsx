"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
// import Image from 'next/image'
import TextClip from '../../utils/TextClip';


interface ProductCartProps {
  items: {
    details: {
      id: number;
      name: string;
      sprites: { front_default: string; };
      abilities: { ability: { name: string; }; }[];
      types: { type: { name: string; }; }[];
    };
    name: string;
  };
}


function capitalize(text: string) {
  if (typeof text !== 'string' || text.length === 0) {
    return text;
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const ProductCart: React.FC<ProductCartProps> = ({ items }) => {

  const router = useRouter()

  const handleClick = () => {
    // Router push fonksiyonunda string URL kullanıyoruz.
    // const url = `/product/${items.details.id}?name=${encodeURIComponent(items.details.name)}&title=${encodeURIComponent(items.name)}`;
    // router.push(url);
    router.push(`/product/${items.details.id}`);
  };

  return (
    <div
      // onClick={() => router.push(`product/${items.details.id}`)}
      onClick={handleClick}
      className='w-[400px] h-[280px] flex-basis-25% cursor-pointer flex flex-col shadow-md rounded-md border hover:shadow-lg p-5'>
      {
        items?.details ?
          <>
            <div className='text-orange-600 font-bold text-center text-lg md:text-xl mb-5'>{TextClip(capitalize(items.details.name), 20)}</div>
            <div className='flex border-t-[1px] pt-5 border-solid items-center'>
              <div className='flex items-center justify-center rounded-full border w-[80px] overflow-hidden bg-sky-500/[.06]'>
                <img className='w-[100%] h-[100%] object-contain' src={items.details.sprites.front_default} alt={items.name} />
              </div>
              <div className='ml-5'>
                <div className='flex flex-wrap items-center'>
                  <b className='text-black text-base md:text-sm'>Yetenekler : </b>
                  <span>
                    {items.details.abilities.map((ability) => { return TextClip(capitalize(ability.ability.name), 10); }).join(', ')}
                  </span>
                </div>
                <div className='flex flex-wrap items-center'>
                  <b className='text-black text-base md:text-sm'>Tür :</b>
                  <span>
                    {items.details.types.map((type: any) => { return TextClip(capitalize(type.type.name), 20); }).join(', ')}
                  </span>
                </div>
              </div>
            </div>
          </> :
          <div>Yükleniyor...</div>
      }
    </div>

  )
}

export default ProductCart