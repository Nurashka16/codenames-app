import React, { useEffect, useState } from 'react';
import styles from './LoadingGrid.module.css';

const LoadingGrid: React.FC = () => {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const colorList = [
      'var(--black)',       // 1 убийца
      ...Array(7).fill('var(--neutral)'), // 7 нейтральных
      ...Array(8).fill('var(--blue)'),   // 8 синих
      ...Array(9).fill('var(--red)'),    // 9 красных
    ];

    const shuffled = [...colorList];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setColors(shuffled);
  }, []);

  return (
    <div className={styles.grid}>
      {colors.map((color, index) => (
        <div
          key={index}
          className={styles.cell}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export default LoadingGrid;