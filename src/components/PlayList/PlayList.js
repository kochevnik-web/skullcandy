import React from 'react';

import './PlayList.scss';

import playlistData from './data';

function PlayList({ number }) {

    const playlist = playlistData[number];

    const list = playlist.rows.map((el, i) => {
        return (
            <div key={i} className="skullcandy-playlist-row">
                <div className="skullcandy-playlist-col-1">
                    <span dangerouslySetInnerHTML={{ __html: el.left }}></span>
                </div>
                <div className="skullcandy-playlist-col-2">
                    <span dangerouslySetInnerHTML={{ __html: el.right }}></span>
                </div>
            </div>
        )
    })

    return (
        <div className="skullcandy-playlist">
            <div className="skullcandy-playlist-wrap">
                {list}
                <div className="skullcandy-playlist-btns">
                    <a
                        href={playlist.link}
                        className="skullcandy-btn-green"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>
                            Слушать на Spotify
                        </span>
                    </a>
                </div>
            </div>
        </div >
    );
}

export default PlayList;