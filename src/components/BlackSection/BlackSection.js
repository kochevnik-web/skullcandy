import React from 'react';
import data from './data';
import './BlackSection.scss';

function BlackSection({ number }) {
    const sectionData = data[number];

    const style = {
        height: sectionData.height
    }

    const images = sectionData.images.map(el => {
        return <img key={el.src} src={el.src} alt={el.alt} style={el.style} />
    });

    return (
        <div className="skullcandy-black-section" style={style}>
            <div className="skullcandy-black-section-content skullcandy-left" style={sectionData.styleWrap}>
                <span dangerouslySetInnerHTML={{ __html: sectionData.text }}></span>
            </div>
            {images}
        </div >
    );
}

export default BlackSection;