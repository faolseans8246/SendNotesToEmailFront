import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Sahifalarni o'zgartirish uchun
import './home.css';

import GiftBox from '../image/giftbox.jpg';

function HomePage() {
    const [currentLangIndex, setCurrentLangIndex] = useState(0);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [showPrompt, setShowPrompt] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // Parolni saqlash uchun
    const navigate = useNavigate(); // HimResult sahifasiga o'tish uchun

    // Matn tillari
    const languages = [
        "Farangiz tug'ilgan kuning bilan tabriklayman",
        "Поздравляю с днем рождения, Фарангиз",
        "Happy Birthday, Farangiz",
        "عيد ميلاد سعيد، فرنغز",
        "Фарангиз, таваллуд муборак",
        "Farangiz, doğum günün kutlu olsun",
        "法兰吉兹，生日快乐"
    ];

    // Ranglar
    const colors = ["red", "blue", "green", "purple", "orange", "pink", "gold"];

    useEffect(() => {
        const textInterval = setInterval(() => {
            setCurrentLangIndex((prevIndex) => (prevIndex + 1) % languages.length);
        }, 2000);

        const colorInterval = setInterval(() => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 1000);

        return () => {
            clearInterval(textInterval);
            clearInterval(colorInterval);
        };
    }, []);

    const handleGiftClick = () => {
        setShowPrompt(true);
    };

    const isValidEmail = (email) => {
        // Email validatsiyasi va iCloud tekshiruvi
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email) || email.endsWith("@icloud.com");
    };

    const handleSend = async () => {
        if (!isValidEmail(email)) {
            alert("Iltimos, to'g'ri email manzilini kiriting (iCloud manzili ham qo'llab-quvvatlanadi).");
            return;
        }

        try {
            const response = await fetch("http://localhost:2006/api/message/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email, // NotesDto: title sifatida email
                    password: password, // NotesDto: passes sifatida parol
                }),
            });
            const result = await response.json();

            if (result.success) {
                alert("Sovg'a email manzilingizga yuborildi!");
                setShowPrompt(false); // Promptni yopish
                setEmail(""); // Email maydonini tozalash
                setPassword(""); // Parolni tozalash
                navigate("/himresult"); // HimResult sahifasiga o'tish
            } else {
                alert("Xatolik yuz berdi, qayta urinib ko'ring!");
            }
        } catch (error) {
            alert("Xatolik yuz berdi, qayta urinib ko'ring!");
        }
    };

    return (
        <div className="homeContainer">
            <div className="congralutionText" style={{ color: colors[currentColorIndex], fontSize: "2rem" }}>
                {languages[currentLangIndex]}
            </div>

            <div className="clickButton">
                <button onClick={handleGiftClick} className="giftButton" style={{ width: "100px", height: "100px" }}>
                    <img src={GiftBox} className="giftboxClass" alt="gift" style={{ width: "90%", height: "90%" }} />
                </button>
            </div>

            {showPrompt && (
                <div className="emailPrompt">
                    <h3 className="promptTitle">Sovg'angizni olish uchun emailingizni tasdiqlang!</h3>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email kiriting"
                        className="promptInput"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Parol kiriting"
                        className="promptInput"
                    />
                    <div className="promptActions">
                        <button onClick={handleSend} className="promptButton confirm">Tasdiqlash</button>
                        <button onClick={() => setShowPrompt(false)} className="promptButton cancel">Bekor qilish</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;
