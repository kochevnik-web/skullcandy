import React from 'react';
import './BigPic.scss';

import dataPic from './data';

function BigPic({ number }) {

    return (
        <div className="skullcandy-bigpic">
            <img src={dataPic[number].src} alt="skullcandy-bigpic" />
        </div>
    );
}

export default BigPic;