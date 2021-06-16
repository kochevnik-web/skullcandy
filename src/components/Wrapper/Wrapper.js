import React from 'react';

function Wrapper({ em, isMobile, children }) {

    return (
        <div className="app-wrap" style={{ width: isMobile ? em * 32 + 'px' : em * 192 + 'px' }}>
            {children}
        </div>
    );
}

export default Wrapper;