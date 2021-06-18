import React from 'react';
import Wrapper from '../Wrapper/Wrapper';

import './More.scss';

import data from './moreData';

function More({ number }) {

    const dataMore = data[number];
    const cls = ['skullcandy-more', 'skullcandy-' + dataMore.id];

    const elements = dataMore.elements.map((el, i) => {
        if (el.type === 'text') {
            return (
                <p key={i} className="skullcandy-lh">
                    <span className="skullcandy-text" dangerouslySetInnerHTML={{ __html: el.content }}></span>
                </p>
            )
        }

        if (el.type === 'blockquote') {
            return (
                <div key={i} className="skullcandy-blockquote">
                    <span dangerouslySetInnerHTML={{ __html: el.content }}></span>
                </div>
            )
        }

        if (el.type === 'video') {
            return (
                <div key={i} className="skullcandy-more-video">
                    <video controls={true} width="100%" playsinline="playsinline">
                        <source src={el.content.src} type="video/mp4" />
                    </video>
                    {/* <img src={el.content.src} alt={el.content.alt} /> */}
                </div>
            )
        }

        if (el.type === 'image') {
            return (
                <div key={i} className={"skullcandy-more-image " + el.content.id}>
                    <img className="skullcandy-image-width" src={el.content.src} alt={el.content.alt} />
                </div>
            )
        }

        return null;
    });

    return (
        <Wrapper>
            <div className={cls.join(' ')}>
                <div className="skullcandy-more-content skullcandy-left">
                    {elements}
                </div>
                {dataMore.image && (
                    <div className={"skullcandy-more-image " + dataMore.id}>
                        <img className="skullcandy-image-width" src={dataMore.image.src} alt={dataMore.image.alt} />
                    </div>
                )}
            </div>
        </Wrapper>
    );
}

export default More;