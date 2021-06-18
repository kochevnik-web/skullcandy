import React, { useEffect } from 'react';
import gsap from 'gsap';

import image1 from './img/image1.png';
import image2 from './img/image2.png';
import image3 from './img/image3.png';
import image4 from './img/image4.png';
import image5 from './img/image5.png';
import ico from './img/ico.png';

import './Final.scss';

import Wrapper from '../Wrapper/Wrapper';

function Final({ isMobile }) {

    const paralax = (e) => {
        if (!isMobile) {
            let cx = window.innerWidth / 2;
            let cy = window.innerHeight / 2;
            let dx = e.pageX - cx;
            let dy = e.pageY - cy;
            let tiltx = (dy / cy);
            let tilty = - (dx / cx);
            gsap.to(".skullcandy-final-paralax", 1, { x: tilty * 4, y: tiltx * 4, rotation: 0.01, ease: 'power2.put' });
        }

    }

    return (
        <Wrapper>
            <div className="skullcandy-final" onMouseMove={(e) => paralax(e)}>
                <div className="skullcandy-more-content skullcandy-left">
                    <p className="skullcandy-lh">
                        <span className="skullcandy-text">
                            Основатель компании SkullCandy Рик Олден занимается сноубордингом, поэтому не удивительно, что он смог сделать дизайн наушников таким, что они стали популярны среди тех, кто ведёт активный образ жизни: у спортсменов, танцоров и представителей субкультур.
                        </span>
                    </p>
                    {isMobile ? (
                        <>
                            <div className="skullcandy-more-image skullcandy-final-image-2">
                                <img className="skullcandy-image-width" src={image3} alt="skullcandy" />
                            </div>
                            <div className="skullcandy-more-image skullcandy-final-image-2">
                                <img className="skullcandy-image-width" src={image4} alt="skullcandy" />
                            </div>
                        </>
                    ) : null}
                    <p className="skullcandy-lh">
                        <span className="skullcandy-text">
                            Беспроводные модели наушников <a href="https://doctorhead.ru/product/skullcandy_indy_evo_tws_grey/" target="_blank" rel="noreferrer">Indy Evo</a> и <a href="https://doctorhead.ru/product/skullcandy_sesh_evo_tws_black/" target="_blank" rel="noreferrer">Sesh Evo</a> уже давно известны в Америке и за её пределами. Их главные преимущества — отличное звучание, защита от влаги и заряд батареи, которого хватает до шести часов. Многие признают их классикой, которая будет
                            в тренде всегда.

                        </span>
                    </p>
                    {isMobile ? (
                        <>
                            <div className="skullcandy-more-image skullcandy-final-image-2">
                                <img className="skullcandy-image-width" src={image2} alt="skullcandy" />
                            </div>
                            <div className="skullcandy-more-image skullcandy-final-image-2">
                                <img className="skullcandy-image-width" src={image5} alt="skullcandy" />
                            </div>
                        </>
                    ) : null}
                    <p className="skullcandy-lh">
                        <span className="skullcandy-text">
                            А в этом сезоне бренд представил новую модель <a href="https://doctorhead.ru/product/skullcandy_dime_chill_grey/" target="_blank" rel="noreferrer">DIME</a>. Благодаря плотной посадке
                            и защите от влаги IPX4 в них можно заниматься спортом без ограничений. Миниатюрный кейс (всего 6,22 х 3,87см) легко поместится в поясную сумку, а удобная петля для крепления удержит их, как бы активно вы не двигались. Модель представлена в четырёх цветовых сочетаниях: тёмно-синий / зелёный, светло-серый / синий, тёмно-серый и глубокий чёрный — найдите ту пару, которая ближе
                            к вашему стилю.
                        </span>
                    </p>
                </div>

                <div className="skullcandy-more-image skullcandy-final-image-1">
                    <img className="skullcandy-image-width" src={image1} alt="skullcandy" />
                </div>

                {!isMobile ? (
                    <div className="skullcandy-final-paralax">
                        <div className="skullcandy-more-image skullcandy-final-image-2">
                            <img className="skullcandy-image-width" src={image2} alt="skullcandy" />
                        </div>
                        <div className="skullcandy-more-image skullcandy-final-image-3">
                            <img className="skullcandy-image-width" src={image3} alt="skullcandy" />
                        </div>
                        <div className="skullcandy-more-image skullcandy-final-image-4">
                            <img className="skullcandy-image-width" src={image4} alt="skullcandy" />
                        </div>
                        <div className="skullcandy-more-image skullcandy-final-image-5">
                            <img className="skullcandy-image-width" src={image5} alt="skullcandy" />
                        </div>
                    </div>
                ) : null}
                <div className="skullcandy-final-btns">
                    <a href="https://doctorhead.ru/brands/skullcandy/products/personal-audio/naushniki/besprovodnye-bluetooth/" target="_blank" rel="noreferrer">
                        <img src={ico} alt="ico" />
                        <span>SkullCandy для тебя</span>
                    </a>
                </div>
            </div>
        </Wrapper>
    );
}

export default Final;