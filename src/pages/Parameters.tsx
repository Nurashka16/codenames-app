import React from 'react';
import styles from './Parameters.module.css';
import { observer } from 'mobx-react-lite';
import { gameParametersStore, type CardsCountType, type CardsType, type TeamsCountType, type TimeOutType } from '../app/store';

const Parameters: React.FC = observer(() => {
    const store = gameParametersStore;
    const TEAMS_COUNT_OPTIONS: TeamsCountType[] = [2, 3];
    const CARDS_OPTIONS: CardsType[] = ["Basic", "18+"];
    const TIME_OUT_TYPE: TimeOutType[] = ["Off", 60, 90, 120];

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.corner} ${styles.corner_topLeft}`}></div>
            <div className={`${styles.corner} ${styles.corner_topRight}`}></div>
            <div className={`${styles.corner} ${styles.corner_bottomLeft}`}></div>
            <div className={`${styles.corner} ${styles.corner_bottomRight}`}></div>

            <div className={styles.container}>
                <h1 className={styles.title}>Параметры игры</h1>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Режим игры</h2>
                        <div className={styles.grid}>
                            {CARDS_OPTIONS.map((type) => (
                                <button
                                    key={type}
                                    className={`${styles.card} 
                                        ${store.typeCards === type ? styles.cardIsActive : ''}`}
                                    onClick={() => (store.setCardsType(type))}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Сколько команд</h2>
                        <div className={styles.grid}>
                            {TEAMS_COUNT_OPTIONS.map((team) => (
                                <button
                                    key={team}
                                    className={`${styles.card} 
                                        ${store.teams.count === team ? styles.cardIsActive : ''}`}
                                    onClick={() => store.setCountTeams(team)}
                                >
                                    {team}
                                </button>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Добавить зеленую карту</h2>
                        <div className={styles.grid}>
                            <button aria-pressed={store.isActiveGreenCards === false} onClick={() => store.toggleIsActiveGreenCard(false)} className={`${styles.card} 
                            ${!store.isActiveGreenCards && styles.cardIsActive}`}>
                                Нет</button>
                            <button aria-pressed={store.isActiveGreenCards === true} onClick={() => store.toggleIsActiveGreenCard(true)} className={`${styles.card} 
                            ${store.isActiveGreenCards && styles.cardIsActive}`}>
                                Да</button>

                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Таймер</h2>
                        <div className={styles.grid}>
                            {TIME_OUT_TYPE.map((time) => (
                                <button
                                    key={time}
                                    className={`${styles.card} 
                                        ${store.timer === time ? styles.cardIsActive : ''}`}
                                    onClick={() => store.setTimeOut(time)}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </section>
                </div>

                <button className={styles.button}>Создать комнату</button>
            </div>
        </div>
    );
})

export default Parameters;