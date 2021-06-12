import React from 'react';
import './Intro.scss';

import logo from './img/logo.png';

function App() {

    return (
        <div className="skullcandy-intro">
            <div className="skullcandy-intro-img">
                <img src={logo} alt="skullcandy" />
            </div>
            <h1 className="skullcandy-intro-title skullcandy-left">
                <span>
                    <strong>«Ёкнуло сердечко, и пришло понимание — это моё».</strong><br />Скейтбордист, хореограф и диджей — о том, как найти дело по душе
                </span>
            </h1>
            <div className="skullcandy-intro-description skullcandy-left">
                <h5>
                    <span>
                        Работа — это необязательно офис с ежедневными отчётами и заседаниями. Если выбрать занятие по душе, это уже не рутина, а любимое хобби, которое дарит удовольствие.
                    </span>

                </h5>
                <p className="skullcandy-lh">
                    <span className="skullcandy-text">
                        О том, как выбрать своё призвание, мы говорили с амбассадорами производителя наушников SkullCandy — скейтбордистом Димой Давыдовым, хореографом Стасом Литвиновым и диджеем Мэри Джейн. Они рассказали нам, как превратили хобби в профессию и преодолевали трудности, вдохновляясь музыкой. Делимся личными историями героев и плейлистами с их любимыми треками.
                    </span>
                </p>
            </div>
        </div >
    );
}

export default App;