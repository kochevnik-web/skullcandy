import insta1 from './img/insta.png';
import image1 from './img/image.png';
import insta2 from './img/insta2.png';
import image2 from './img/image2.png';
import insta3 from './img/insta3.png';
import image3 from './img/image3.png';


const data = [
    {
        id: 'dance',
        name: 'Стас Литвинов',
        nickname: 'stas_litvinov',
        instaLink: 'https://www.instagram.com/stas_litvinov',
        insta: insta1,
        subtitle: 'Финалист шоу «ТАНЦЫ» на ТНТ, хореограф Кубка конфедераций FIFA 2017, хореограф к/ф «Майор Гром», артист шоу-пространства «Ленинград Центр»',
        h5: '<strong>«Я в своей карьере шёл по принципу покорения вершин».</strong><br /><br />Стас Литвинов — о том, как стать чемпионом в танцах и понять, что это не главное',
        text: [
            'Я начал танцевать по большой случайности. Когда шёл в 1 класс, мамина подруга отдавала свою дочку в танцевальный кружок и предложила моей маме отвести меня тоже. На первые занятия я идти не хотел, но потом мне так понравились и танцы, и коллектив, что я стал сам туда рваться.',
            'Уже в 9 классе я понял, что танцы — это моя профессия. После школы поступил в киевскую Академию искусств на хореографа. Я выбрал народное направление, хотя в школе мы танцевали спортивную эстраду. Как же было сложно поступать без базы… Но за горящие глаза и огромное желание меня взяли, причем на бюджет.',
            'Я в своей карьере шёл по принципу покорения вершин: от одного проекта — к другому. Было важно самому себе доказать, что я могу добиться поставленных целей, проявить силу воли.'
        ],
        image: { src: image1, style: { width: '43.1em', height: '65.1em', left: '15em', top: '61.5em' } }
    },
    {
        id: 'dj',
        name: 'Мэри Джейн',
        nickname: 'maryjjjjane_',
        instaLink: 'https://www.instagram.com/maryjjjjane_',
        insta: insta2,
        subtitle: 'Диджей, резидент команды Centennia, выступает на радио, опен-эйрах и в именитых московских клубах (Community, Mason St. One, Geisha Superman, Les Escaliers и других)',
        h5: '<strong>«Каждый диджей — эмпат».</strong>Мэри Джейн — о врождённом чувстве резонанса и умении создавать вайб',
        text: [
            'Я очень долго искала себя. У меня был период в жизни, когда я хотела попробовать всё на свете. И стала ходить на всевозможные пробные занятия, от веб-дизайна до игры на барабанах. А потом я обратила внимание на диджеинг, у меня сразу ёкнуло сердечко и закралось тёплое чувство, что это моё.',
            'С первого же занятия в мою жизнь начали приходить люди, которые меня вдохновляли. Я делилась в соцсетях со своими друзьями тем, что делаю, и видела, какие эмоции это вызывает. И поняла: не могу, просто не могу остановиться.',
        ],
        image: { src: image2, style: { width: '30.9em', height: '46.3em', left: '27em', top: '53em' } }
    },
    {
        id: 'skateboard',
        name: 'Дима Давыдов',
        nickname: 'davydoff_dima',
        instaLink: 'https://www.instagram.com/davydoff_dima',
        insta: insta3,
        subtitle: 'Скейтбордист, основатель школы скейтбординга Boardhero, призёр и победитель спортивных соревнований. Стаж катания — 23 года.',
        h5: '<strong>«Это похоже на творчество».</strong> Дима Давыдов — о том, как реализоваться через скейтбординг ',
        text: [
            'Когда мне было 6 лет, я увидел, как взрослые парни катаются в скейт-парке, и у меня возник какой-то безумный интерес к этому спорту. Я начал брать у ребят во дворе доски, такие... ещё советские, и пробовать. В 7 лет мама подарила мне мою первую доску, плоскую и загнутую только с одной стороны, на которой я мог только кататься туда-сюда. А потом я поиграл в легендарную игру Tony Hawk (симулятор скейтбординга. — Прим. Medialeaks) и увидел, что на доске можно творить что-то нереальное. Меня это очень вдохновило, я захотел учить сложные трюки.',
            'И вот в 9 лет я получил в подарок первую нормальную доску, на которой начал отрабатывать трюки. Обучался я сам. На набережной иногда катались взрослые, которые делились советами. Со временем образовалась своя компания, и мы с друзьями развивали технику и изучали трюки по видео, которые находили в Сети, и по Tony Hawk.',
            'С 24 лет я преподаю в школе скейтбординга. Мне хочется обучать других, чтобы они быстрее почувствовали прогресс. У нас этой возможности не было, и мы тратили на освоение серьёзной базы лет 7–8. Хотя сейчас, с таким количеством доступной информации и тренером, это можно сделать всего лет за 5. Я стараюсь вдохновить своих учеников, чтобы они не сдавались и двигались всегда только вперёд.',
        ],
        image: { src: image3, style: { width: '52.2em', height: '63.9em', left: '7em', top: '79em' } }
    },
];

export default data;
