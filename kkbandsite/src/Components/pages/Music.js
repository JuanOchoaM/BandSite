import React from 'react';
import "./Music.css";

export default function Music() {

    const iframeStyle = {
        borderColor: 'white',
    };

    return (
        <div className='iframeStyle'>
        <iframe
            title='Titanic Boomerang track view'
            src="https://open.spotify.com/embed/track/0MpbNALkcxs7f4Eznvub3p?utm_source=generator"
            width="700"
            height="352"
            style={iframeStyle}
            frameBorder="1"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>
        </div>
    );
}
