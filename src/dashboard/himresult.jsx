import React, { useState, useEffect } from "react";
import './himresult.css';

import Image1 from '../gallery/first.jpg';
import Image2 from '../gallery/second.jpg';
import Image3 from '../gallery/third.jpg';

function HimresultFunc() {
    const images = [
        Image1,
        Image2,
        Image3
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 1000); // 1 sekundda rasmni o'zgartirish
        return () => clearInterval(interval); // intervalni to'xtatish
    }, []);

    return (
        <div className="himresultContainer">
            <img
                src={images[currentImage]}
                alt="gallery"
                className={`image ${currentImage % 2 === 0 ? 'fade-in' : 'zoom-in'}`}
            />
        </div>
    );
}

export default HimresultFunc;
