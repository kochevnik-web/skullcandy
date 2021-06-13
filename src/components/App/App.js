import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import './App.scss';

import Intro from '../Intro/Intro';
import BigPic from '../BigPic/BigPic';
import BlackSection from '../BlackSection/BlackSection';
import PlayList from '../PlayList/PlayList';
import Stas from '../Stas/Stas';
import Stas2 from '../Stas2/Stas2';
import Stas3 from '../Stas3/Stas3';
import DJ from '../DJ/DJ';

function App() {

    function getEm() { return window.innerWidth / 192 }

    function getIsMobile() {
        return window.innerWidth < window.innerHeight && window.innerWidth < 768 ? true : false;
    }

    const [em, setEm] = useState(10);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setEm(getEm());
        setIsMobile(getIsMobile());

        gsap.to('.app', {
            opacity: 1,
            duration: 0.8
        });
    }, []);

    window.addEventListener('resize', () => {
        setEm(getEm());
        setIsMobile(getIsMobile());
    });

    let clx = ['app'];

    if (isMobile) clx.push('app-mobile');

    return (
        <div className={clx.join(' ')} style={{ fontSize: em }}>
            <Intro />
            <BigPic number={0} />
            <Stas />
            <BlackSection number={0} />
            <Stas2 />
            <BlackSection number={1} />
            <Stas3 />
            <BlackSection number={2} />
            <PlayList number={0} />
            <BigPic number={1} />
            <DJ />
        </div>
    );
}

export default App;