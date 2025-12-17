import { generateTypeCard } from '../common/function/generateTypeCard';

const words40 = [
    "первое", "второе", "третье", "четвертое", "пятое", "шестое",
    "седьмое", "восьмое", "девятое", "десятое", "одиннадцатое", "двенадцатое",
    "тринадцатое", "четырнадцатое", "пятнадцатое", "шестнадцатое",
    "семнадцатое", "восемнадцатое", "девятнадцатое", "двадцатое",
    "двадцать первое", "двадцать второе", "двадцать третье", "двадцать четвертое",
    "двадцать пятое", "двадцать шестое", "двадцать седьмое", "двадцать восьмое",
    "двадцать девятое", "тридцатое", "тридцать первое", "тридцать второе",
    "тридцать третье", "тридцать четвертое", "тридцать пятое", "тридцать шестое",
    "тридцать седьмое", "тридцать восьмое", "тридцать девятое", "сороковое"
];

describe('generateTypeCard', () => {
    it('если ничего не скинуть', () => {
        expect(generateTypeCard([], false)).toEqual([]);
    });

    it('список из 25 строк и без зеленой карточки', () => {
        const result = generateTypeCard(words40.slice(0, 25), false);
        expect(result).toEqual([
            { text: 'первое', color: 'red' },
            { text: 'второе', color: 'red' },
            { text: 'третье', color: 'red' },
            { text: 'четвертое', color: 'red' },
            { text: 'пятое', color: 'red' },
            { text: 'шестое', color: 'red' },
            { text: 'седьмое', color: 'red' },
            { text: 'восьмое', color: 'red' },
            { text: 'девятое', color: 'red' },        // 9 красных
            { text: 'десятое', color: 'blue' },
            { text: 'одиннадцатое', color: 'blue' },
            { text: 'двенадцатое', color: 'blue' },
            { text: 'тринадцатое', color: 'blue' },
            { text: 'четырнадцатое', color: 'blue' },
            { text: 'пятнадцатое', color: 'blue' },
            { text: 'шестнадцатое', color: 'blue' },
            { text: 'семнадцатое', color: 'blue' },   // 8 синих
            { text: 'восемнадцатое', color: 'gray' },
            { text: 'девятнадцатое', color: 'gray' },
            { text: 'двадцатое', color: 'gray' },
            { text: 'двадцать первое', color: 'gray' },
            { text: 'двадцать второе', color: 'gray' },
            { text: 'двадцать третье', color: 'gray' },
            { text: 'двадцать четвертое', color: 'gray' }, // 7 серых
            { text: 'двадцать пятое', color: 'black' }     // 1 чёрная
        ]);
    });

    it('список из 25 строк но с зеленой карточкой', () => {
        const result = generateTypeCard(words40.slice(0, 25), true);
        const grayCards = result.filter(c => c.color === 'gray');
        const greenCards = result.filter(c => c.color === 'green');

        expect(greenCards).toHaveLength(1);
        expect(grayCards).toHaveLength(6);
        expect(greenCards[0].text).toBe('двадцать четвертое'); 
    });

    it('если список из 36 и без зеленой карточки', () => {
        const result = generateTypeCard(words40.slice(0, 36), false);
        expect(result).toHaveLength(36);

        const violetCards = result.filter(c => c.color === 'violet');
        expect(violetCards).toHaveLength(8);
    });
    it('если список из 36 но с зеленой карточкой', () => {
        const result = generateTypeCard(words40.slice(0, 36), true);
        const grayCards = result.filter(c => c.color === 'gray');
        const greenCards = result.filter(c => c.color === 'green');

        expect(greenCards).toHaveLength(1);
        expect(grayCards).toHaveLength(8);
        expect(greenCards[0].text).toBe('тридцать пятое'); 
    });
    it('если список из 40 и без зеленой карточки', () => {
        const result = generateTypeCard(words40, false);
        expect(result).toHaveLength(36);
    });
    it('если список из 30 и без зеленой карточки', () => {
        const result = generateTypeCard(words40.slice(0, 30), false);
        expect(result).toHaveLength(25);
    });
});