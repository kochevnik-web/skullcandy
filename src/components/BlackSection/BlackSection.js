import React from 'react';
import data from './data';
import './BlackSection.scss';

function BlackSection({ number }) {
    const sectionData = data[number];

    const images = sectionData.images.map(el => {
        return <img key={el.src} src={el.src} alt={el.alt} />
    });

    return (
        <div className={"skullcandy-black-section style-" + number}>
            <div className="skullcandy-black-section-content skullcandy-left">
                <span dangerouslySetInnerHTML={{ __html: sectionData.text }}></span>
            </div>
            {images}
        </div >
    );
}

export default BlackSection;