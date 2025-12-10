import React, { useState, useEffect } from 'react';
import LoadingGrid from '../components/LoadingGrid';
import styles from './Home.module.css';

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
            {/* Угловые квадраты */}
            <div className={`${styles.corner} ${styles.topLeft}`}></div>
            <div className={`${styles.corner} ${styles.topRight}`}></div>
            <div className={`${styles.corner} ${styles.bottomLeft}`}></div>
            <div className={`${styles.corner} ${styles.bottomRight}`}></div>

            {/* Основной контент */}
            <div className={styles.container}>
                <h1 className={styles.title}>Namecodes</h1>
                <div className={styles.cube}>
                    <LoadingGrid/>
                </div>
                {/*{showCreateButton && (*/}
                {/*    <button className={styles.createButton}>*/}
                {/*        Создать комнату*/}
                {/*    </button>*/}
                {/*)}*/}
            </div>
        </div>
    );
};

export default Home;