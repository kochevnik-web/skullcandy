import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import './App.scss';

import Intro from '../Intro/Intro';
import BigPic from '../BigPic/BigPic';
import BlackSection from '../BlackSection/BlackSection';
import PlayList from '../PlayList/PlayList';
import Start from '../Start/Start';
import More from '../More/More';
import Final from '../Final/Final';

function App() {

    function getEm() {
        if (window.innerWidth < 768) {
            return window.innerWidth / 32
        } else {
            return window.innerWidth / 192
        }
    }

    function getIsMobile() {
        return window.innerWidth < 768 ? true : false;
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
            <Start number={0} />
            <BlackSection number={0} />
            <More number={0} />
            <BlackSection number={1} />
            <More number={1} />
            <BlackSection number={2} />
            <PlayList number={0} />
            <BigPic number={1} />
            <Start number={1} />
            <BlackSection number={3} />
            <More number={2} />
            <BlackSection number={4} />
            <More number={3} />
            <PlayList number={1} />
            <BigPic number={2} />
            <Start number={2} />
            <BlackSection number={5} />
            <More number={4} />
            <BlackSection number={6} />
            <PlayList number={2} />
            <BigPic number={3} />
            <Final />
        </div>
    );
}

export default App;