"use client";
import React, { useState, useEffect } from 'react';
import { DetailClient } from '@/app/components'
import { useSelector,  } from 'react-redux';
import { AppState } from '../../store/store';

type DetailPros = {
  pokemonId?: string,
  err:string
}

const Detail = ({ params }: { params: DetailPros }) => {
  const { items, status, error } = useSelector((state: AppState) => state.items);
  const { pokemonId } = params


  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(error);


  useEffect(() => {
    if (pokemonId) {
      // API'den ürünü almak için async fonksiyon
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
          if (!response.ok) {
            throw new Error('Ürün bulunamadı');
          }
          // API'den gelen veriyi JSON formatında al
          const data = await response.json();
          // Ürünü `product` durum değişkenine atayın
          setPokemonDetail(data);
          setLoading(false);
        } catch (err) {
          // Hata durumunda hatayı kaydedin
          setIsError(error);
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [pokemonId]);


  if (loading) {
    return <div>Yükleniyor...</div>; // Yüklenme sırasında gösterilecek mesaj
  }
  if (error) {
    return <div>Hata: {isError}</div>; // Hata durumunda gösterilecek mesaj
  }

  return (
    <div>
      <DetailClient pokemon={pokemonDetail} />
    </div>
  )
}

export default Detail
