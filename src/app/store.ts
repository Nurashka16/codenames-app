import { makeAutoObservable } from "mobx";
import { generateTypeCard } from '../common/function/generateTypeCard';

export type TeamsCountType = 2 | 3;
export type CardsType = 'Basic' | '18+';
export type TimeOutType = 'Off' | 60 | 90 | 120;
export type TeamColorType = 'red' | 'blue' | 'violet';
export type CardColorType = TeamColorType | 'black' | 'gray' | 'green';
export type CardsCountType = 25 | 36;

export interface ICard {
    text: string;
    color: CardColorType;
}
export interface IPlayer {
    name: string;
}
export interface ITeam {
    capitan: IPlayer;
    players: IPlayer[];
    teamColor: TeamColorType;
}
export interface ITeamParamenters {
    teams: ITeam[];
    count: TeamsCountType
}

export class GameParameters {
    typeCards: CardsType = "Basic";
    teams: ITeamParamenters = {
        teams: [],
        count: 2
    }
    cardsCount: CardsCountType = 25;
    cards: ICard[] = []
    isActiveGreenCards: boolean = false;
    timer: TimeOutType = "Off";

    constructor() {
        makeAutoObservable(this);
    }

    setCountCards = (countTeams: TeamsCountType) => {
        this.teams.count = countTeams;
        this.cardsCount = countTeams === 2 ? 25 : 36;
    }

    setCardsType = (typeCards: CardsType) => {
        this.typeCards = typeCards
    }

    setTimeOut = (time: TimeOutType) => {
        this.timer = time;
    };

    setCountTeams = (countTeams: TeamsCountType) => {
        this.teams.count = countTeams
    };
    toggleIsActiveGreenCard = (isActive: boolean) => {
        this.isActiveGreenCards = isActive;
    };

    getCards() {
        //отправляем запрос по апи с this.teams.count
        const data: string[] = []
        generateTypeCard(data, this.isActiveGreenCards)
    }
}

export const gameParametersStore = new GameParameters();