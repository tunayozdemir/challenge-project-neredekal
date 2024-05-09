"use client"
import React from 'react';
import PageContainer from '../Containers/PageContainer'
import mockRouter from 'next-router-mock';
import { useRouter } from 'next/navigation';

interface PokemonDetail {
  name?: string;
  title?: string;
  details: [],
}

const DetailClient: React.FC<{ pokemon: PokemonDetail | null }> = ({ pokemon }) => {

  const router = useRouter()

  if (!pokemon) {
    return (
      <div className='my-10'>
        <PageContainer>
          Yükleniyor veya geçersiz veri.
        </PageContainer>
      </div>
    );
  }

  const handleGoBack = () => {
    router.back()
  };

  return (
    <div className='my-10'>

      <PageContainer>
        <div className='flex items-center justify-center rounded-full border w-[80px] overflow-hidden bg-sky-500/[.06]'>
          <img className='w-[100%] h-[100%] object-contain' src={pokemon?.sprites?.front_default} alt={pokemon.name} />
        </div>
        <div><strong>İsim:</strong> {pokemon.name}</div>
        <div><strong>Başlık:</strong> {pokemon?.title}</div>
        <button onClick={handleGoBack} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'>
          Geri Dön
        </button>
      </PageContainer>
    </div>
  )
}

export default DetailClient