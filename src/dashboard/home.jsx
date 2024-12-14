import React, { useEffect, useState } from "react";
import './home.css';

import GiftBox from '../image/giftbox.jpg';

function HomePage() {
    const [currentLangIndex, setCurrentLangIndex] = useState(0);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    // Matn tillari
    const languages = [
        "Farangiz tug'ilgan kuning bilan tabriklayman",
        "\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e \u0441 \u0434\u043d\u0435\u043c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f, \u0424\u0430\u0440\u0430\u043d\u0433\u0438\u0437",
        "Happy Birthday, Farangiz",
        "\u0639\u064a\u062f \u0645\u064a\u0644\u0627\u062f \u0633\u0639\u064a\u062f\u060c \u0641\u0631\u0646\u062c\u0632",
        "\u0424\u0430\u0440\u0430\u043d\u0433\u0438\u0437, \u0442\u0430\u0432\u0430\u043b\u043b\u0443\u0434 \u043c\u0443\u0431\u043e\u0440\u0430\u043a",
        "Farangiz, do\u011fum g\u00fcn\u00fcn kutlu olsun",
        "\u6cd5\u5170\u5409\u5179\uff0c\u751f\u65e5\u5feb\u4e50"
    ];

    // Ranglar
    const colors = ["red", "blue", "green", "purple", "orange", "pink", "gold"];

    useEffect(() => {
        const textInterval = setInterval(() => {
            setCurrentLangIndex((prevIndex) => (prevIndex + 1) % languages.length);
        }, 2000); // Har 2 soniyada almashadi

        const colorInterval = setInterval(() => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 1000); // Har 1 soniyada rang o‘zgaradi

        return () => {
            clearInterval(textInterval);
            clearInterval(colorInterval);
        };
    }, []);

    return (
        <div className="homeContainer">
            <div className="congralutionText" style={{ color: colors[currentColorIndex], fontSize: "2rem" }}>
                {languages[currentLangIndex]}
            </div>

            <div className="clickButton">
                <button className="giftButton" style={{ width: "100px", height: "100px" }}>
                    <img src={GiftBox} className="giftboxClass" alt="gift" style={{ width: "90%", height: "90%" }} />
                </button>
            </div>
        </div>
    );
}

export default HomePage;
