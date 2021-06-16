import React, { useEffect, useContext } from 'react';
import gsap from 'gsap';
import './App.scss';

import { Context } from "../../context";

import Intro from '../Intro/Intro';
import BigPic from '../BigPic/BigPic';
import BlackSection from '../BlackSection/BlackSection';
import PlayList from '../PlayList/PlayList';
import Start from '../Start/Start';
import More from '../More/More';
import Final from '../Final/Final';

function App() {

    const { em, isMobile } = useContext(Context);

    useEffect(() => {
        gsap.to('.app', {
            opacity: 1,
            duration: 0.8
        });
    }, []);

    let clx = ['app'];

    if (isMobile) clx.push('app-mobile');

    return (
        <div className={clx.join(' ')} style={{ fontSize: em }}>
            <div>
                <Intro />
                <BigPic number={0} />
                <Start number={0} />
                <BlackSection number={0} />
                <More number={0} />
                <BlackSection number={1} />
                <More number={1} />
                <BlackSection number={2} />
                <PlayList number={0} />
                {/* <BigPic number={1} />
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
                <Final /> */}
            </div>
        </div>
    );
}

export default App;