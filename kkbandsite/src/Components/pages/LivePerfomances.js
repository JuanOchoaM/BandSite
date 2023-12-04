import React, { useEffect } from 'react';
import "./page.css";
import "./liveperformances.css";

export default function LivePerformances() {
    useEffect(() => {
        const seatedScript = document.createElement("script");
        seatedScript.src = "https://widget.seated.com/app.js";
        seatedScript.async = true;
        seatedScript.onload = () => {
            console.log('Script loaded successfully');
            const box = document.getElementById('box');
            if (box) {
                console.log('The script has loaded.');
            } else {
                console.error("Element with ID 'box' not found.");
            }
        };
        seatedScript.onerror = () => {
            console.error('Error occurred while loading script');
        };
        document.body.appendChild(seatedScript);
    }, []); 

    return (
        <div>
            <div id="box"></div>
            <div id="seated-55fdf2c0" data-artist-id="a6cf78d1-645c-41bd-84fc-65b163e11b07" data-css-version="3"></div>
        </div>
    );
}

/*
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0MpbNALkcxs7f4Eznvub3p?utm_source=generator" width="600" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
*/