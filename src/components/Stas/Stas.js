import React from 'react';
import './Stas.scss';

import insta from './img/insta.png';
import image from './img/image.png';

function Stas() {

    return (
        <div className="skullcandy-stas">
            <div className="skullcandy-stas-insta">
                <div className="skullcandy-stas-insta-img">
                    <img src={insta} alt="stas_litvinov" />
                </div>
                <div className="skullcandy-stas-insta-title">
                    <h5>stas_litvinov</h5>
                    <a
                        href="https://www.instagram.com/stas_litvinov"
                        target="_blank"
                        rel="noreferrer"
                        className="skullcandy-btn"
                    >
                        <span>Подписаться</span>
                    </a>
                </div>
            </div>
            <div className="skullcandy-stas-content skullcandy-left">
                <h2>
                    <span>Стас Литвинов</span>
                </h2>
                <div className="skullcandy-stas-content-subtitle">
                    <span>
                        Финалист шоу «ТАНЦЫ» на ТНТ, хореограф Кубка конфедераций FIFA 2017, хореограф к/ф «Майор Гром», артист шоу-пространства «Ленинград Центр»
                    </span>
                </div>
                <h5>
                    <span>
                        <strong>«Я в своей карьере шёл по принципу покорения вершин».</strong><br />
                        Стас Литвинов — о том, как стать чемпионом в танцах и понять, что это не главное
                    </span>
                </h5>
                <p className="skullcandy-lh">
                    <span className="skullcandy-text">
                        Я начал танцевать по большой случайности. Когда шёл в 1 класс, мамина подруга отдавала свою дочку в танцевальный кружок и предложила моей маме отвести меня тоже. На первые занятия я идти не хотел, но потом мне так понравились и танцы, и коллектив, что я стал сам туда рваться.
                    </span>
                </p>
                <p className="skullcandy-lh">
                    <span className="skullcandy-text">
                        Уже в 9 классе я понял, что танцы — это моя профессия. После школы поступил в киевскую Академию искусств на хореографа. Я выбрал народное направление, хотя в школе мы танцевали спортивную эстраду. Как же было сложно поступать без базы… Но за горящие глаза и огромное желание меня взяли, причем на бюджет.
                    </span>
                </p>
                <p className="skullcandy-lh">
                    <span className="skullcandy-text">
                        Я в своей карьере шёл по принципу покорения вершин: от одного проекта — к другому. Было важно самому себе доказать, что я могу добиться поставленных целей, проявить силу воли.
                    </span>
                </p>
            </div>
            <div className="skullcandy-stas-image">
                <img src={image} alt="Стас Литвинов" />
            </div>
        </div >
    );
}

export default Stas;