import React, { useState } from 'react';
import Chick from '../../assets/images/chick.png';
import Doc from '../../assets/images/doc.png';
import Guido from '../../assets/images/guido.png';
import Mate from '../../assets/images/mate.png';
import Ramon from '../../assets/images/ramon.png';
import Rayo from '../../assets/images/rayo.png';
import Rey from '../../assets/images/rey.png';
import Saly from '../../assets/images/saly.png';
import Storm from '../../assets/images/storm.png';
import MemotestGame from './MemotestGame.tsx';

export default () => {
  // Полный массив изображений
  const allImages: string[] = [Doc, Guido, Mate, Ramon, Rayo, Rey, Saly, Storm, Chick];
  
  // Состояние для управления выбранными изображениями
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  // Обработчик изменения количества карточек
  const handleCardsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    // Определяем количество карточек
    let count = 0;
    if (selectedValue === '6') count = 3;
    else if (selectedValue === '12') count = 6;
    else if (selectedValue === '16') count = 8;

    // Устанавливаем в состояние нужное количество изображений
    setSelectedImages(allImages.slice(0, count));
  };

  return (
    <>
      <select onChange={handleCardsChange}>
        <option value="">Select Cards</option>
        <option value="6">6 Cards</option>
        <option value="12">12 Cards</option>
        <option value="16">16 Cards</option>
      </select>
      <MemotestGame images={selectedImages} />
    </>
  );
};
