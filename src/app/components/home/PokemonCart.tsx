"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import TextClip from '../../utils/TextClip';

interface PokemonCartProps {
  array: {
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

const PokemonCart: React.FC<PokemonCartProps> = ({ array }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/feature/${array.details.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className='lg:w-[30%] lg:h-[280px] md:w-[47%] sm:w-[100%] sm:h-[250px] 
            max-sm:w-[100%] max-sm:h-[230px] flex-basis-25% cursor-pointer flex flex-col shadow-md rounded-md border hover:shadow-lg transition delay-100 ease-in-out hover:scale-110 p-2'
    >
      {
        array?.details ? (
          <>
            <div className='text-orange-600 font-bold text-center text-lg md:text-xl mb-5'>
              {TextClip(capitalize(array.details.name), 20)}
            </div>
            <div className='flex border-t-[1px] pt-5 border-solid items-center'>
              <div className='flex items-center justify-center rounded-full border w-[80px] overflow-hidden bg-sky-500/[.06]'>
                {array.details.sprites?.front_default && (
                  <img
                    className='w-[100%] h-[100%] object-contain'
                    src={array.details.sprites.front_default}
                    alt={array.name}
                  />
                )}
              </div>
              <div className='ml-5'>
                <div className='flex flex-wrap items-center'>
                  <b className='text-black text-base md:text-sm'>Yetenekler: </b>
                  <span>
                    {array.details.abilities
                      ?.map((ability) => TextClip(capitalize(ability.ability.name), 10))
                      .join(', ')}
                  </span>
                </div>
                <div className='flex flex-wrap items-center'>
                  <b className='text-black text-base md:text-sm'>Tür: </b>
                  <span>
                    {array.details.types
                      ?.map((type) => TextClip(capitalize(type.type.name), 20))
                      .join(', ')}
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className='text-8xl text-orange-600 flex items-center justify-center p-10'>
            Yükleniyor...
          </div>
        )
      }
    </div>
  );
};

export default PokemonCart;
