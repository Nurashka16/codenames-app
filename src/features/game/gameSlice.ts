import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type QueueNumberType = "red" |"blue";
type QueueCardNumberType = QueueNumberType | "black" | "gray";
type TimeOutType = 60 | 90 | 120;
type CardCountType = 20 | 26 | 32;
type CardType = 'regular' | '18+';

interface IPlayer {
    name: string;
}

interface ITeam {
    capitan: IPlayer;
    players: IPlayer[];
    queueNumber: QueueNumberType;
}

interface ITimer {
    isActive: boolean;
    timeOut: TimeOutType;
}

interface ICard {
    text: string;
    queueCardNumber: QueueCardNumberType;
}

interface ICards {
    type: CardType;
    counts: CardCountType;
    cards: ICard[];
}

interface GameState {
    teams: ITeam[];
    cards: ICards;
    cardCount: number;
    timer: ITimer;
}

const initialState: GameState = {
    teams: [],
    cards: {
        type: 'regular',
        counts: 20,
        cards: [],
    },
    cardCount: 18,
    timer: {
        isActive: false,
        timeOut: 60,
    },
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setTeams: (state, action: PayloadAction<ITeam[]>) => {
            state.teams = action.payload;
        },
        setCards: (state, action: PayloadAction<ICards>) => {
            state.cards = action.payload;
        },
        setTimer: (state, action: PayloadAction<ITimer>) => {
            state.timer = action.payload;
        },
        setGameSetting: (
            state,
            action: PayloadAction<{ teams: ITeam[]; cards: ICards; timer: ITimer }>
        ) => {
            const { teams, cards, timer } = action.payload;
            state.teams = teams;
            state.cards = cards;
            state.timer = timer;
        },
    },
});

export const { setTeams, setCards, setTimer, setGameSetting } = gameSlice.actions;
export default gameSlice.reducer;
