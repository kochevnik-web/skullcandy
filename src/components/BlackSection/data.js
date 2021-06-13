import skullcandy1 from './img/skullcandy1.png'
import skullcandy2 from './img/skullcandy2.png'

const data = [
    {
        text: "Штаб-квартира бренда SkullCandy расположена в городе Парк Сити в горах штата Юта и находится на высоте почти 2 тысячи метров. Основатели компании говорят, что их вдохновляют «небоскрёбы природного происхождения» — <text>когда ваш главный офис находится так высоко, это помогает достигать по-настоящему больших целей.</text>",
        height: '59.5em',
        styleWrap: { top: '15.5em' },
        images: [
            { src: skullcandy1, style: { left: '146.4em', top: '-9em', width: '40em', height: '23.9em' }, alt: 'skullcandy-1' }
        ]
    },
    {
        text: "Философия SkullCandy основана на том, что музыку можно не только услышать, но и почувствовать.",
        height: '35.4em',
        styleWrap: { top: '14em' },
        images: [
            { src: skullcandy2, style: { left: '144.4em', top: '-26em', width: '47.9em', height: '47.9em' }, alt: 'skullcandy-2' }
        ]
    },
];

export default data;