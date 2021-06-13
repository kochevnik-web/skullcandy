import React from 'react';
import './DJ.scss';

import insta from './img/insta.png';
import image from './img/image.png';

function DJ() {

    return (
        <div className="skullcandy-stas skullcandy-dj">
            <div className="skullcandy-stas-insta">
                <div className="skullcandy-stas-insta-img">
                    <img src={insta} alt="maryjjjjane_" />
                </div>
                <div className="skullcandy-stas-insta-title">
                    <h5>maryjjjjane_</h5>
                    <a
                        href="https://www.instagram.com/maryjjjjane_"
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
                    <span>Мэри Джейн</span>
                </h2>
                <div className="skullcandy-stas-content-subtitle">
                    <span>
                        Диджей, резидент команды Centennia, выступает на радио, опен-эйрах и в именитых московских клубах (Community, Mason St. One, Geisha Superman, Les Escaliers и других)
                    </span>
                </div>
                <h5>
                    <span>
                        <strong>«Каждый диджей — эмпат».</strong>Мэри Джейн — о врождённом чувстве резонанса и умении создавать вайб
                    </span>
                </h5>
                <p className="skullcandy-lh">
                    <span className="skullcandy-text">
                        Я очень долго искала себя. У меня был период в жизни, когда я хотела попробовать всё на свете. И стала ходить на всевозможные пробные занятия, от веб-дизайна до игры на барабанах. А потом я обратила внимание на диджеинг, у меня сразу ёкнуло сердечко и закралось тёплое чувство, что это моё.
                    </span>
                </p>
                <p className="skullcandy-lh">
                    <span className="skullcandy-text">
                        С первого же занятия в мою жизнь начали приходить люди, которые меня вдохновляли. Я делилась в соцсетях со своими друзьями тем, что делаю, и видела, какие эмоции это вызывает. И поняла: не могу, просто не могу остановиться.
                    </span>
                </p>
            </div>
            <div className="skullcandy-stas-image">
                <img src={image} alt="Мэри Джейн" />
            </div>
        </div >
    );
}

export default DJ;