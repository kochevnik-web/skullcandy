import React from 'react';
import data from './data';
import './BlackSection.scss';

import Wrapper from '../Wrapper/Wrapper';

function BlackSection({ number }) {
    const sectionData = data[number];

    const images = sectionData.images.map(el => {
        return <img key={el.src} src={el.src} alt={el.alt} />
    });

    return (
        <div className={"skullcandy-black-section style-" + number}>
            <Wrapper>
                <div className="skullcandy-black-section-content skullcandy-left">
                    <span dangerouslySetInnerHTML={{ __html: sectionData.text }}></span>
                </div>
                {images}
            </Wrapper>
        </div >
    );
}

export default BlackSection;