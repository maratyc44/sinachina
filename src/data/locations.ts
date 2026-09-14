// Координаты и фото для всех университетов Китая
export const universityLocations: Record<number, { lat: number; lng: number; image: string }> = {
  // Пекин
  1: { lat: 39.9989, lng: 116.3267, image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800" }, // Цинхуа
  2: { lat: 39.9870, lng: 116.3052, image: "https://images.unsplash.com/photo-1546883424-6f0c1e3c3b6b?w=800" }, // Пекинский
  3: { lat: 39.9928, lng: 116.3317, image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800" }, // BLCU
  4: { lat: 39.9599, lng: 116.3267, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" }, // BFSU
  
  // Шанхай
  5: { lat: 31.0282, lng: 121.4436, image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800" }, // SJTU
  6: { lat: 31.2986, lng: 121.5033, image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800" }, // Fudan
  7: { lat: 31.2831, lng: 121.5022, image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800" }, // Tongji
  
  // Чжэцзян
  8: { lat: 30.3085, lng: 120.0862, image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800" }, // Zhejiang
  
  // Хубэй
  9: { lat: 30.5369, lng: 114.3639, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" }, // Wuhan
  10: { lat: 30.5139, lng: 114.4211, image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800" }, // HUST
  
  // Хэйлунцзян
  11: { lat: 45.7411, lng: 126.6278, image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800" }, // HIT
  12: { lat: 45.7559, lng: 126.6478, image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800" }, // Heilongjiang
  
  // Цзянсу
  13: { lat: 32.2044, lng: 119.2219, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" }, // Jiangsu
  14: { lat: 32.0579, lng: 118.7781, image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800" }, // Nanjing
  15: { lat: 32.0599, lng: 118.7969, image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800" }, // Southeast
  
  // Гуандун
  16: { lat: 23.0946, lng: 113.2974, image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800" }, // SYSU
  17: { lat: 23.1022, lng: 113.3199, image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800" }, // SCUT
  18: { lat: 22.5431, lng: 114.0579, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" }, // Shenzhen
  
  // Фуцзянь
  19: { lat: 24.4359, lng: 118.0964, image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800" }, // Xiamen
  20: { lat: 26.0745, lng: 119.3029, image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800" }, // Fujian Normal
  
  // Сычуань
  21: { lat: 30.6289, lng: 104.0739, image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800" }, // Sichuan
  22: { lat: 30.6689, lng: 104.0639, image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800" }, // UESTC
  
  // Шэньси
  23: { lat: 34.2399, lng: 108.9139, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" }, // NPU
  24: { lat: 34.2359, lng: 108.9839, image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800" }, // XJTU
  
  // Тяньцзинь
  25: { lat: 39.1039, lng: 117.1679, image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800" }, // Tianjin
  26: { lat: 39.1009, lng: 117.1719, image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800" }, // Nankai
  
  // Шаньдун
  27: { lat: 36.6759, lng: 117.0539, image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800" }, // Shandong
  28: { lat: 36.0679, lng: 120.3839, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" }, // OUC
  
  // Ляонин
  29: { lat: 41.7039, lng: 123.4239, image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800" }, // NEU
  30: { lat: 38.9039, lng: 121.6039, image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800" }, // DUT
  
  // Хунань
  31: { lat: 28.2239, lng: 112.9339, image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800" }, // CSU
  32: { lat: 28.2339, lng: 112.9239, image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800" }, // Hunan
  
  // Аньхой
  33: { lat: 31.8439, lng: 117.2639, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" }, // USTC
  
  // Юньнань
  34: { lat: 25.0539, lng: 102.7039, image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800" }, // Yunnan
  
  // Гуанси
  35: { lat: 22.8139, lng: 108.3239, image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800" }, // Guangxi
  
  // Цзилинь
  36: { lat: 43.8839, lng: 125.3239, image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800" }, // Jilin
  
  // Ганьсу
  37: { lat: 36.0539, lng: 103.8239, image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800" }, // Lanzhou
  
  // Гуйчжоу
  38: { lat: 26.6539, lng: 106.6339, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" }, // Guizhou
  
  // Хайнань
  39: { lat: 20.0139, lng: 110.3539, image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800" }, // Hainan
  
  // Хэбэй
  40: { lat: 38.8739, lng: 115.4639, image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800" }, // Hebei
  
  // Шаньси
  41: { lat: 37.8739, lng: 112.5539, image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800" }, // Shanxi
  
  // Внутренняя Монголия
  42: { lat: 40.8139, lng: 111.6739, image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800" }, // Inner Mongolia
  
  // Цинхай
  43: { lat: 36.6239, lng: 101.7739, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" }, // Qinghai
  
  // Нинся
  44: { lat: 38.4839, lng: 106.2339, image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800" }, // Ningxia
  
  // Синьцзян
  45: { lat: 43.8239, lng: 87.6139, image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800" }, // Xinjiang
};

// Функция для получения координат и фото университета
export function getUniversityLocation(id: number): { lat: number; lng: number; image: string } | null {
  return universityLocations[id] || null;
}

// Функция для генерации Google Maps URL
export function getGoogleMapsUrl(lat: number, lng: number, name: string): string {
  return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${lat},${lng}&zoom=15`;
}

// Функция для генерации Google Maps embed URL (без API ключа)
export function getGoogleMapsEmbedUrl(lat: number, lng: number): string {
  return `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
}
