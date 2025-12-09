import React, { useEffect, useState } from 'react';
import styles from './LoadingGrid.module.css';

const LoadingGrid: React.FC = () => {
  const [colors, setColors] = useState<string[]>([]);

  // Генерируем случайные цвета для квадратиков при монтировании
  useEffect(() => {
    const newColors = Array.from({ length: 25 }, () =>
      Math.random() > 0.5 ? '#FF6B6B' : '#4D96FF'
    );
    setColors(newColors);
  }, []);

  return (
    <div className={styles.grid}>
      {Array.from({ length: 25 }).map((_, index) => (
        <div
          key={index}
          className={styles.cell}
          style={{ backgroundColor: colors[index] }}
        />
      ))}
    </div>
  );
};

export default LoadingGrid;