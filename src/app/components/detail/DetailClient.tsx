"use client"
import React from 'react';
import PageContainer from '../Containers/PageContainer'
import { useRouter } from 'next/navigation';
import { Button } from 'antd'
import TextClip from '../../utils/TextClip';

interface PokemonDetail {
  name?: string;
  title?: string;
  details: [],
}

const DetailClient: React.FC<{ pokemon: PokemonDetail | null }> = ({ pokemon }) => {

  const router = useRouter()

  if (!pokemon) {
    return (
      <div className=''>
        <PageContainer>
          Yükleniyor veya geçersiz veri.
        </PageContainer>
      </div>
    );
  }
  const handleGoBack = () => {
    router.back()
  };

  function capitalize(text: string) {
    if (typeof text !== 'string' || text.length === 0) {
      return text;
    }
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  console.log(pokemon)

  return (
    <div className='flex justify-center items-center my-10'>
      <PageContainer className='w-[90vw] h-[80vh] flex shadow-md border rounded'>
        <div className='w-[100%] flex flex-col relative'>
          <div className='flex w-[100%] items-center border-b-[1px] p-5'>
            <div className=' w-[12%] max-sm:w-[20%] rounded-full border overflow-hidden bg-sky-500/[.06]'>
              <img className='w-[100%] h-[100%] object-contain' src={pokemon?.sprites?.front_default} alt={pokemon.name} />
            </div>
            <div className='text-orange-600 font-bold text-4xl max-sm:text-xl ml-5'>{TextClip(capitalize(pokemon?.name), 20)}</div>
          </div>

          <div className='flex w-[100%] h-[100%]'>
            <ul className='w-[100%]'>
              <li className='flex w-[100%] border-b-[1px] p-4 hover:bg-orange-100 hover:text-orange-500 transition delay-200 ease-in-out'>
                <span className='min-w-[150px] font-bold lg:text-2xl md:text-lg sm:text-base'>Yetenekler:</span>
                <p className='lg:text-xl md:text-base'>
                  {pokemon?.abilities.map((ability) => { return TextClip(capitalize(ability.ability.name), 20); }).join(', ')}
                </p>
              </li>
              <li className='flex w-[100%] border-b-[1px] p-4 hover:bg-orange-100 hover:text-orange-500 transition delay-200 ease-in-out'>
                <span className='min-w-[150px] font-bold lg:text-2xl md:text-lg sm:text-base'>Tür:</span><p className='lg:text-xl md:text-base'> {pokemon.types.map((type: any) => { return TextClip(capitalize(type.type.name), 20); }).join(', ')}</p>
              </li>
            </ul>
          </div>
          <div className='absolute bottom-5 right-5 w-[200px]'>
            <Button className='bg-orange-600 ' block type="primary" onClick={handleGoBack} >Geri Dön</Button>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}

export default DetailClient