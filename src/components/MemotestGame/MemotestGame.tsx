import React, { useState, useEffect } from 'react';
import { shuffleArray } from '../../utils.ts';
import RestartGame from '../RestartGame.tsx';
import MemotestBox from './MemotestBox.tsx';

interface IState {
  [key: string]: IStateValue;
}

interface IStateValue {
  image: string;
  visible: boolean;
}

interface IMemotestGameProps {
  images: string[];
}

const MemotestGame = (props: IMemotestGameProps) => {
  const [elements, setElements] = useState<IState>({});
  const [initialOrder, setInitialOrder] = useState<string[]>([]);
  const [firstElement, setFirstElement] = useState<string>('');
  const [secondElement, setSecondElement] = useState<string>('');
  const [win, setWin] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);

  // Обновляем состояние при изменении props.images
  useEffect(() => {
    const newElements = buildInitialState(props.images);
    setElements(newElements);
    setInitialOrder(shuffleArray(Object.keys(newElements)));
    setFirstElement('');
    setSecondElement('');
    setWin(false);
    setGameOver(false);

    // Устанавливаем таймер в зависимости от количества карт
    if (props.images.length === 3) {
      setTimeLeft(40); // 40 секунд для 6 карт
    } else if (props.images.length === 6) {
      setTimeLeft(60); // 60 секунд для 12 карт
    } else if (props.images.length === 8) {
      setTimeLeft(80); // 80 секунд для 16 карт
    } else {
      setTimeLeft(null); // Нет таймера, если количество карт не совпадает
    }
  }, [props.images]);

  // Обновляем таймер
  useEffect(() => {
    if (timeLeft === null || win || gameOver) return;

    if (timeLeft === 0) {
      setGameOver(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, win, gameOver]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (gameOver || win) return;

    const clickedElement:any = event.currentTarget.dataset.id;

    if (secondElement || (elements[clickedElement].visible)) return;

    const updatedElements = { ...elements };
    updatedElements[clickedElement].visible = true;
    setElements(updatedElements);

    if (firstElement) {
      setSecondElement(clickedElement);

      if (firstElement.split('-')[0] !== clickedElement.split('-')[0]) {
        setTimeout(() => {
          const resetElements = { ...elements };
          resetElements[firstElement].visible = false;
          resetElements[clickedElement].visible = false;
          setElements(resetElements);
        }, 500);
      }

      setFirstElement('');
      setSecondElement('');
    } else {
      setFirstElement(clickedElement);
    }

    if (Object.keys(updatedElements).every((e) => updatedElements[e].visible)) {
      setWin(true);
    }
  };

  const restartGame = () => {
    const newElements = buildInitialState(props.images);
    setElements(newElements);
    setInitialOrder(shuffleArray(Object.keys(newElements)));
    setFirstElement('');
    setSecondElement('');
    setWin(false);
    setGameOver(false);

    // Устанавливаем таймер в зависимости от количества карт
    if (props.images.length === 3) {
      setTimeLeft(40); // 40 секунд для 6 карт
    } else if (props.images.length === 6) {
      setTimeLeft(60); // 60 секунд для 12 карт
    } else if (props.images.length === 8) {
      setTimeLeft(80); // 80 секунд для 16 карт
    } else {
      setTimeLeft(null); // Нет таймера, если количество карт не совпадает
    }
  };

  return (
    <div className="memotest">
      <RestartGame win={win} gameOver={gameOver} onRestart={restartGame} />

      <div>
        {timeLeft !== null && !win && !gameOver && (
          <div className="timer">Time Left: {timeLeft} seconds</div>
        )}
        {initialOrder.map((name: string) => (
          <MemotestBox
            key={name}
            id={name}
            onClick={handleClick}
            visible={elements[name].visible}
            img={elements[name].image}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * Returns a IState object
 * @param images list of image files
 */
function buildInitialState(images: string[]): IState {
  return images.reduce((result, img) => {
    const baseName = img.split('media/')[1].split('.')[0];
    result[`${baseName}-1`] = { image: img, visible: false };
    result[`${baseName}-2`] = { image: img, visible: false };
    return result;
  }, {} as IState);
}

export default MemotestGame;
