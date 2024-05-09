"use client"
// "use server"
import React, { useEffect, useState } from 'react';
import { Products } from "./components";

import { useSelector, useDispatch } from 'react-redux';
import { fetchItemsAsync } from './store/itemsSlice';
import { AppState, AppDispatch } from './store/store';


export default function Home() {

  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector((state: AppState) => state.items);

  const ITEMS_PER_PAGE = 10;

  // Mevcut sayfa numarası için bir durum değişkeni tanımla
  const [currentPage, setCurrentPage] = useState(1);

  // Sayfa numarasına göre başlat ve bitir indekslerini hesapla
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Mevcut sayfadaki öğeleri seç
  const currentItems = items.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchItemsAsync());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Yükleniyor...</div>;
  }

  if (status === 'failed') {
    return <div>Bir hata oluştu: {error}</div>;
  }

  // Sayfa değiştirici fonksiyonunu tanımla
  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Toplam sayfa sayısını hesapla
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);


  return (
    <div>
      {/* Products bileşenine mevcut sayfadaki öğeleri gönder */}
      <Products items={currentItems} />

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => changePage(i + 1)}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
