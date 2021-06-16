import litvinov from './img/litvinov.png';
import djein from './img/djein.png';
import davidov from './img/davidov.png';

const data = [
    {
        id: 'dance-2',
        image: null,
        elements: [
            {
                type: 'text',
                content: 'Я всегда хотел победить в крупном известном проекте. Стал финалистом шоу «ТАНЦЫ» на ТНТ. Это крутейшая платформа, которая показывает, что танцовщики — самостоятельные артисты, а не просто тень, подтанцовка. Я вложил много сил, энергии в проект и был уверен, что выиграю. И, конечно, было жутко обидно не стать победителем. Но в такие моменты главное — не уходить в самоедство, не копаться в себе и не впадать в одиночество, переключаться.'
            },
            {
                type: 'blockquote',
                content: 'Позже я понял, что весь кайф — в процессе. Ты не становишься сверхчеловеком, если побеждаешь в каком-то конкурсе. Всегда будет следующий чемпион.'
            },
            {
                type: 'text',
                content: 'Это очень хрупкая материя. А вот сам процесс «подъёма к Эвересту» — то, что даёт тебе силы и делает тебя лучше. Именно это — тот фундамент, который останется с тобой навсегда.'
            },
            {
                type: 'text',
                content: 'Моя задача как хореографа — танцем транслировать эмоцию и передать определённую энергию зрителю, чтобы он действительно прожил историю героя. Каждый танцовщик вкладывает в танец свои личные переживания, свой опыт, свои наблюдения.'
            },
            {
                type: 'video',
                content: { src: process.env.PUBLIC_URL + '/videos/video1.mp4', alt: 'Стас Литвинов Видео' }
            },
            {
                type: 'text',
                content: 'Так и рождается собственный стиль. Это визуализация музыки по своему ощущению на данный отрезок времени: та картинка, которую я сейчас могу увидеть и передать. «Лебединое озеро» уже сколько веков танцуют, но все его ставят по-разному. Каждый по-своему его трактует и выражает.'
            },
            {
                type: 'text',
                content: 'А музыка — инструмент, который помогает это выразить. Вообще танцовщики воспринимают музыку иначе. Я, например, музыку вижу движениями, волнами. Иногда она превращается в картинки. А уже затем тело превращает это в танец.'
            },
        ]
    },
    {
        id: 'dance-3',
        image: { src: litvinov, alt: 'Стас Литвинов Танец' },
        elements: [
            {
                type: 'text',
                content: 'Я очень люблю, когда у людей есть свой особенный почерк, своё видение. Поэтому скрупулёзно выбираю каждое движение, чтобы оно максимально подходило именно под этот звук и под эту историю. И при этом всегда стараюсь делать не как у всех, без мейнстрима. Так, как мне нравится. Люблю даже какую-то странность добавить.'
            },
            {
                type: 'blockquote',
                content: 'Один раз от режиссера «Ленинград Центра» услышал: «Стас, у тебя какие-то деструктивные танцы». И это правда: мой почерк такой же контрастный, как и я.'
            },
            {
                type: 'text',
                content: 'Один раз от режиссера «Ленинград Центра» услышал: «Стас, у тебя какие-то деструктивные танцы». И это правда: мой почерк такой же контрастный, как и я. Такой инь и ян: современный, дерзкий, брутальный, но при этом лирический, драматический. Поэтому мои любимые стили — контемпорари и хип-хоп.'
            },
            {
                type: 'text',
                content: 'Мне кажется, у нас у всех есть врождённое чувство ритма, потому что танцем можно назвать любое движение. Твои сердце и кровь двигаются, даже когда ты стоишь. Значит, мы всегда танцуем. И чтобы почувствовать свободу в танце — нужно просто расслабиться и погрузиться в себя. Танцевать так, как будто тебя никто не видит и это последний танец в твоей жизни.'
            },
        ]
    },
    {
        id: 'dj-1',
        image: null,
        elements: [
            {
                type: 'text',
                content: 'Для меня диджеинг — немного магическая история. В жизни я достаточно скромный и стеснительный человек, типичная отличница. Но как только встаю за пульт, я преображаюсь в абсолютно другого человека. Как будто во мне живут две личности. Наверное, это из-за того, что для меня каждый сет — мощный обмен энергиями между аудиторией и мной. Я очень сильно заряжаюсь от диджеинга и становлюсь другой: заводной, весёлой. Пою со всеми, танцую, отбиваю всем пятёрки. А как только отхожу от пульта — снова становлюсь скромной малышкой.'
            },
            {
                type: 'text',
                content: 'Для меня диджеинг — помощь людям настроиться на особенный вайб, который можешь подарить только ты. У каждого диджея есть свой стиль. Можно своей музыкой решить, что люди будут делать: танцевать, веселиться, общаться. Хочешь ли ты их погрузить в музыкальный транс или чтобы музыка не отвлекала и просто была приятным фоном, под который они могут разговаривать. '
            },
        ]
    },
    {
        id: 'dj-2',
        image: { src: djein, alt: 'Мэри Джейн' },
        elements: [
            {
                type: 'text',
                content: 'Поэтому каждый диджей — эмпат. У нас есть какое-то врождённое чувство резонанса с людьми и понимание, что они ощущают в данный момент и что хотят получить. Иногда бывает, что планируешь один сет, а потом видишь, что люди совсем с другим настроением. И ты перекраиваешь концепцию своего выступления под эту атмосферу.'
            },
            {
                type: 'blockquote',
                content: 'Моя история довольно простая: мне хочется вдохновить людей на что-то хорошее. Чтобы они отпустили всё негативное, что их тревожит. И вспомнили, что пришли, чтобы просто дарить веселье и любовь.'
            },
            {
                type: 'text',
                content: 'Само построение сета — это такая концептуальная история, которую ты рассказываешь аудитории через последовательность треков и тем, как обрабатываешь музыку, миксуешь. Моя история довольно простая: мне хочется вдохновить людей на что-то хорошее. Чтобы они отпустили всё негативное, что их тревожит. Поэтому я интуитивно выбираю ту музыку, которая звучит очень светло и чисто.'
            },
            {
                type: 'video',
                content: { src: process.env.PUBLIC_URL + '/videos/video2.mp4', alt: 'Мэри Джейн Видео' }
            },
            {
                type: 'text',
                content: 'Прекрасное чувство во время выступления — единение с аудиторией. Для меня это самое важное: я даю людям то, что они хотят, а в ответ получаю улыбки. Мне иногда не нужно никаких приятных слов: радости на лицах людей достаточно для того, чтобы быть самой счастливой на свете.'
            },
            {
                type: 'text',
                content: 'Останавливаться на своём пути никогда не стоит. И для меня логичное развитие карьеры диджея — это музыкальное продюсирование. Если сетом я могу передать настроение, то треком я смогу донести ещё и свою мысль. Часто люди и места создают во мне какую-то идею, определённый вайб, и это рождает во мне мелодию. Пока что я только учусь, пробую и слушаю разные звуки. А в будущем хотелось бы полностью синтезировать свою музыку.'
            },
            {
                type: 'text',
                content: 'Я считаю, что абсолютно каждый трек — огромный труд и вложенные эмоции автора. Поэтому любой из них может вызывать достаточно сильные чувства, если будет звучать в правильный момент жизни.'
            },
        ]
    },
    {
        id: 'skateboard-2',
        image: { src: davidov, alt: 'Дима Давыдов' },
        elements: [
            {
                type: 'text',
                content: 'Я по характеру гиперактивный. Просто не могу сидеть на месте. Пробовал себя в других сферах: ходил на танцы, занимался музыкой, каратэ, прыжками в воду. Но именно скейтбординг — то, что серьёзно зацепило.'
            },
            {
                type: 'text',
                content: 'Момент, когда ты сделал сложный трюк, который долго не получался, — это высший кайф. Больше ничего не нужно, я становлюсь безумно счастливым. Даже когда я просто катаюсь на доске по городу, слушаю музыку, шум колёс, набираю скорость и вижу, как оборачиваются люди, — я дико кайфую от этих ощущений.'
            },
            {
                type: 'video',
                content: { src: process.env.PUBLIC_URL + '/videos/video3.mp4', alt: 'Дима Давыдов Видео' }
            },
            {
                type: 'blockquote',
                content: 'Момент, когда ты сделал сложный трюк, который долго не получался, — это высший кайф. Больше ничего не нужно, я становлюсь безумно счастливым.'
            },
            {
                type: 'text',
                content: 'Я бы даже сказал, что скейтбординг — это свобода самовыражения. Каждый раз появляется новое ощущение в ногах и хочется сделать что-то ещё. Это даже похоже на творчество. У каждого скейтера есть свой стиль — в одежде, в езде. Ты катаешься и делаешь трюки, будто исполняешь своеобразный танец.'
            },
            {
                type: 'text',
                content: 'Я очень люблю эту свободу и не понимаю, как люди сидят в офисе целый день. Мне важно заниматься тем, чем я хочу, и так, как я хочу. Я всю жизнь к этому стремился и вот сейчас этого достиг. Я просто кайфую и живу.'
            },
        ]
    },
];

export default data;