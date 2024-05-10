"use client"
// "use server"
import React, { useEffect, useState } from 'react';
import { PokemonWrap } from "./components";

import { useSelector, useDispatch } from 'react-redux';
import { fetchItemsAsync } from './redux/Pokemon/PokemonItemSlice';
import { AppState, AppDispatch } from './redux/store';
import { Button } from 'antd';

export default function Home() {

  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector((state: AppState) => state.items);

  const ITEMS_PER_PAGE = 10;

  // Mevcut sayfa numarası için bir durum değişkeni tanımlar
  const [currentPage, setCurrentPage] = useState(1);

  // Sayfa numarasına göre başlat ve bitir indekslerini hesaplar
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Mevcut sayfadaki öğeleri seç
  const currentItems = items.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchItemsAsync());
  }, [dispatch]);

  // Sayfa değiştirici fonksiyonunu tanımlar
  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Toplam sayfa sayısını hesaplar
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  if (status === 'loading') {
    return <div className='text-8xl text-orange-600 flex items-center justify-center p-10'>Yükleniyor...</div>;
  }

  if (status === 'failed') {
    return <div className='text-8xl text-red-600 flex items-center justify-center p-10'>Bir hata oluştu: {error}</div>;
  }

  return (
    <div>
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
    </div>
  );
}
