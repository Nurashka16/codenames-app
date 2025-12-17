import type { ICard } from "../../app/store";

export const generateTypeCard = (arrText: string[], isActiveGreenCards: boolean): ICard[] => {
    const cards: ICard[] = [];
    if (arrText.length >= 25 && arrText.length < 36) {
        // Обрезаем до 25, если больше
        const safeWords = arrText.slice(0, 25);
        safeWords.forEach((text, i) => {
            if (i < 9) {
                cards.push({ text, color: 'red' });
            } else if (i < 17) {
                cards.push({ text, color: 'blue' });
            } else if (i < 24) {
                cards.push({ text, color: 'gray' });
            } else if (i === 24) {
                cards.push({ text, color: 'black' });
            }
        });

        if (isActiveGreenCards) {
            cards[23] = { ...cards[23], color: 'green' };
        }

    } else if (arrText.length >= 36) {
        // Обрезаем до 36
        const safeWords = arrText.slice(0, 36);
        safeWords.forEach((text, i) => {
            if (i < 9) {
                cards.push({ text, color: 'red' });
            } else if (i < 18) {
                cards.push({ text, color: 'blue' });
            } else if (i < 26) {
                cards.push({ text, color: 'violet' });
            } else if (i < 35) {
                cards.push({ text, color: 'gray' });
            } else if (i === 35) {
                cards.push({ text, color: 'black' });
            }
        });

        if (isActiveGreenCards) {
            cards[34] = { ...cards[34], color: 'green' };
        }

    }
    return cards;
}