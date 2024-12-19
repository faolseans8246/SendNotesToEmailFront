import React, { useState, useEffect } from "react";
import './himresult.css';

import Image1 from '../gallery/1.jpg';
import Image2 from '../gallery/2.jpg';
import Image3 from '../gallery/3.jpg';
import Image4 from '../gallery/4.jpg';
import Image5 from '../gallery/5.jpg';
import Image6 from '../gallery/6.jpg';
import Image7 from '../gallery/7.jpg';
import Image8 from '../gallery/8.jpg';
import Image9 from '../gallery/9.jpg';
import Image10 from '../gallery/10.jpg';
import Image11 from '../gallery/11.jpg';
import Image12 from '../gallery/12.jpg';
import Image13 from '../gallery/13.jpg';
import Image14 from '../gallery/14.jpg';
import Image15 from '../gallery/15.jpg';
import Image16 from '../gallery/16.jpg';
import Image17 from '../gallery/17.jpg';
import Image18 from '../gallery/18.jpg';
import Image19 from '../gallery/19.jpg';
import Image20 from '../gallery/20.jpg';
import Image21 from '../gallery/21.jpg';
import Image22 from '../gallery/22.jpg';
import Image23 from '../gallery/23.jpg';
import Image24 from '../gallery/24.jpg';
import Image25 from '../gallery/25.jpg';
import Image26 from '../gallery/26.jpg';
import Image27 from '../gallery/27.jpg';
import Image28 from '../gallery/28.jpg';
import Image29 from '../gallery/29.jpg';
import Image30 from '../gallery/30.jpg';

import BirthdaySong from '../audio/happybirthday.mp3'; // Musiqa fayli

function HimresultFunc() {
    const images = [
        Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10,
        Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20,
        Image21, Image22, Image23, Image24, Image25, Image26, Image27, Image28, Image29, Image30
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const intervalTime = 1000; // Rasmlar almashish oralig'i (1 soniya)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, intervalTime);
        return () => clearInterval(interval);
    }, [intervalTime]); // Tezlikni yangilashga moslash

    return (
        <div className="himresultContainer">
            <audio src={BirthdaySong} autoPlay loop /> {/* Musiqa */}
            <div className="imageWrapper">
                <img
                    src={images[currentImage]}
                    alt="gallery"
                    className={`image ${currentImage % 2 === 0 ? 'fade-in' : 'zoom-in'}`}
                />
                <div className="textOverlay">Happy Birthday</div>
            </div>
        </div>
    );
}

export default HimresultFunc;
