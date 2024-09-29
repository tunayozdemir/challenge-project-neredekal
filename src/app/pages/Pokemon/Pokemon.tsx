"use client"
import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchItemsAsync } from '../../redux/Pokemon/PokemonItemSlice'
import { AppState, AppDispatch } from '../../redux/store';

import { PokemonWrap } from "../../components";
import { Button } from 'antd';

const Pokemon = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector((state: AppState) => state.items);
  const itemsPerPage = useSelector((state: AppState) => state.settings.itemsPerPage); // `itemsPerPage`'i seç

  // Mevcut sayfa numarası için bir durum değişkeni tanımlar
  const [currentPage, setCurrentPage] = useState(1);

  // Sayfa numarasına göre başlat ve bitir indekslerini hesaplar
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Mevcut sayfadaki öğeleri seç
  const currentItems = items.slice(startIndex, endIndex)

  // Toplam sayfa sayısını hesaplar
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    dispatch(fetchItemsAsync());
  }, [dispatch]);

  // Sayfa değiştirici fonksiyonunu tanımlar
  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };


  if (status === 'loading') {
    return <div className='text-8xl text-orange-600 flex items-center justify-center p-10'>Yükleniyor...</div>;
  }

  if (status === 'failed') {
    return <div className='text-8xl text-red-600 flex items-center justify-center p-10'>Bir hata oluştu: {error}</div>;
  }


  return (
    <>
      <PokemonWrap items={currentItems} />

      <div className='flex justify-center items-center gap-3 mt-20'>
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            onClick={() => changePage(i + 1)}
            disabled={currentPage === i + 1}
            type="primary"
          >
            <div>{i + 1}</div>
          </Button>
        ))}
      </div>
    </>
  )
}

export default Pokemon