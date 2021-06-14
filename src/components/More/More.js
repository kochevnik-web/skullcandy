import React from 'react';

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
                <div className="skullcandy-blockquote">
                    <span dangerouslySetInnerHTML={{ __html: el.content }}></span>
                </div>
            )
        }

        if (el.type === 'video') {
            return (
                <div className="skullcandy-more-video">
                    <img src={el.content.src} alt={el.content.alt} />
                </div>
            )
        }

        if (el.type === 'image') {
            return (
                <div className={"skullcandy-more-image " + el.content.id}>
                    <img className="skullcandy-image-width" src={el.content.src} alt={el.content.alt} />
                </div>
            )
        }

        return null;
    });

    return (
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
    );
}

export default More;