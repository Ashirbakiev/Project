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
import ContainerRow from "../MemotestGame2/ui/ContainerRow.tsx";


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
      <div
        className={`mx-auto flex flex-col h-screen bg-[url('/src/assets/images/c0a0bb9f171daddb26bc1c7bfea6e70b.jpg')] bg-cover bg-center `}
      >
        <select onChange={handleCardsChange}>
          <option value="">Select Cards</option>
          <option value="6">6 Cards</option>
          <option value="12">12 Cards</option>
          <option value="16">16 Cards</option>
        </select>
        <ContainerRow>
          <img src="/img/268d6a673d8693afdf0adba6a80403a2.png" style={{height:'100px'}}/>
          <h2 className="text-tertiary font-gugi text-2xl sm:text-4xl mt-10 bg-bgcolor4 rounded-3xl">
            Игра...
          </h2>
        </ContainerRow>
        <ContainerRow>
          <h2 className="text-tertiary font-gugi text-2xl sm:text-4xl mt-10 bg-bgcolor4 rounded-3xl">
            Найди пару
          </h2>
        </ContainerRow>
        <ContainerRow>
          <ContainerRow cname="flex-wrap w-4/6 bg-bgcolor4 rounded-3xl ">
            <MemotestGame images={selectedImages} />
          </ContainerRow>
        </ContainerRow>

      </div>
    </>
    /*<div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <select onChange={handleCardsChange}>
          <option value="">Select Cards</option>
          <option value="6">6 Cards</option>
          <option value="12">12 Cards</option>
          <option value="16">16 Cards</option>
        </select>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src="/img/268d6a673d8693afdf0adba6a80403a2.png" style={{ height: '100px' }} />
        <h2 style={{
          color: '#333', // Замените на ваш цвет text-tertiary
          fontFamily: 'Gugi, cursive', // Убедитесь, что шрифт Gugi подключен
          fontSize: '2rem', // Настройте размер шрифта
          marginTop: '10px',
          backgroundColor: '#f0f0f0', // Замените на ваш цвет bg-bgcolor4
          borderRadius: '20px', // Настройте скругление углов
          padding: '10px 20px'
        }}>
          Игра...
        </h2>
      </div>
      <div>
        <h2 style={{
          color: '#333',
          fontFamily: 'Gugi, cursive',
          fontSize: '2rem',
          marginTop: '10px',
          backgroundColor: '#f0f0f0',
          borderRadius: '20px',
          padding: '10px 20px'
        }}>
          Найди пару
        </h2>
      </div>
      <div style={{ marginTop: '20px' }}>
        <MemotestGame images={selectedImages} />
      </div>
    </div>*/
  );
};
