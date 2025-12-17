import React, { useState, useEffect } from 'react';
import LoadingGrid from '../components/LoadingGrid';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const [showCreateButton, setShowCreateButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCreateButton(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.corner} ${styles.topLeft}`}></div>
            <div className={`${styles.corner} ${styles.topRight}`}></div>
            <div className={`${styles.corner} ${styles.bottomLeft}`}></div>
            <div className={`${styles.corner} ${styles.bottomRight}`}></div>

            <div className={styles.container}>
                <h1 className={styles.title}>Namecodes</h1>

                <div className={styles.cornerBlack}></div>
                <div className={styles.accentRed}></div>
                <div className={styles.cornerBlackMiddle}></div>
                <div className={`${styles.accentRedMiddle} 
                    ${showCreateButton && styles.centerButtonActive}`}>
                    {showCreateButton && (
                        <Link to="/parameters" className={styles.createButton}>
                            Создать комнату</Link>
                    )}
                </div>
                <div className={styles.accentBlueMiddle}></div>
                <div className={styles.accentBlueBottom}></div>
                <div className={styles.cornerBlackBottom}></div>

                {/* Игровой куб (анимация) */}
                <div className={styles.cube}>
                    <div className={`${styles.stripes} ${styles.stripesTop}`}></div>
                    <div className={`${styles.stripes} ${styles.stripesRight}`}></div>
                    <div className={`${styles.stripes} ${styles.stripesBottom}`}></div>
                    <div className={`${styles.stripes} ${styles.stripesLeft}`}></div>
                    
                    <LoadingGrid />
                </div>
            </div>
        </div>
    )
}
export default Home;