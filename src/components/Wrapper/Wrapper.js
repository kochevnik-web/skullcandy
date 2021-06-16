import React, { useContext } from 'react';
import { Context } from '../../context';

function Wrapper({ children }) {

    const { em, isMobile } = useContext(Context);

    return (
        <div className="app-wrap" style={{ width: isMobile ? em * 32 + 'px' : em * 192 + 'px' }}>
            {children}
        </div>
    );
}

export default Wrapper;