import React, { useContext } from 'react';
import './Start.scss';

import { Context } from '../../context';

import Wrapper from '../Wrapper/Wrapper';

import data from './data.js';

function Stas({ number }) {

    const { isMobile } = useContext(Context);

    const dataStart = data[number];
    const cls = ['skullcandy-start', 'skullcandy-' + dataStart.id];

    const text = dataStart.text.map((el, i) => {
        return (
            <p key={i} className="skullcandy-lh">
                <span className="skullcandy-text" dangerouslySetInnerHTML={{ __html: el }}></span>
            </p>
        )
    });

    return (
        <Wrapper>
            <div className={cls.join(' ')}>
                {!isMobile && (
                    <div className="skullcandy-start-insta">
                        <div className="skullcandy-start-insta-img">
                            <img src={dataStart.insta} alt={dataStart.nickname} />
                        </div>
                        <div className="skullcandy-start-insta-title">
                            <h6>{dataStart.nickname}</h6>
                            <a
                                href={dataStart.instaLink}
                                target="_blank"
                                rel="noreferrer"
                                className="skullcandy-btn"
                            >
                                <span>Подписаться</span>
                            </a>
                        </div>
                    </div>
                )}

                <div className="skullcandy-start-content skullcandy-left">
                    <h2>
                        <span>{dataStart.name}</span>
                    </h2>
                    <div className="skullcandy-start-content-subtitle">
                        <span dangerouslySetInnerHTML={{ __html: dataStart.subtitle }}></span>
                    </div>
                    {isMobile && (
                        <div className="skullcandy-start-insta">
                            <div className="skullcandy-start-insta-img">
                                <img src={dataStart.insta} alt={dataStart.nickname} />
                            </div>
                            <div className="skullcandy-start-insta-title">
                                <h6>{dataStart.nickname}</h6>
                                <a
                                    href={dataStart.instaLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="skullcandy-btn"
                                >
                                    <span>Подписаться</span>
                                </a>
                            </div>
                        </div>
                    )}
                    <h5>
                        <span dangerouslySetInnerHTML={{ __html: dataStart.h5 }}></span>
                    </h5>
                    {text}
                </div>
                <div className="skullcandy-start-image">
                    <img src={dataStart.image.src} alt={dataStart.name} />
                </div>
            </div >
        </Wrapper>
    );
}

export default Stas;