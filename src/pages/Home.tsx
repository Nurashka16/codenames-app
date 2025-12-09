import React, { useState, useEffect } from 'react';
import LoadingGrid from '../components/LoadingGrid';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const [showCreateButton, setShowCreateButton] = useState(false);

  // Через 15 секунд показываем кнопку
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCreateButton(true);
    }, 15000); // 15 секунд

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Namecodes</h1>
      <LoadingGrid />
      {showCreateButton && (
        <button className={styles.createButton} onClick={() => alert('Комната создана!')}>
          Создать комнату
        </button>
      )}
    </div>
  );
};

export default Home;