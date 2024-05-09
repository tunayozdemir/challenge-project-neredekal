const textClip = (text: string, limit: number = 20): string | null => {
  if (typeof text !== 'string') {
      console.error('TextClip Error: Provided value is not a string!');
      return null;
  }

  // Metnin uzunluğunu `limit` değerine göre kontrol ediyoruz.
  if (text.length <= limit) {
      return text; // Eğer metin `limit` değerinden kısa veya eşitse, metni olduğu gibi döndürün.
  }

  // `limit` değerine göre kesip metni döndürüyoruz.
  return text.substring(0, limit - 3) + '...';
};

export default textClip;