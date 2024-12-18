import React from "react";
import HomePage from './home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HimresultFunc from "./himresult";

const ConnectFiunc = () => {

    return (

        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/himresult" element={<HimresultFunc />} />
            </Routes>
        </Router>
    )
}

export default ConnectFiunc;