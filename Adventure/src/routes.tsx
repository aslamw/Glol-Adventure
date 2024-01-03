import React from "react";
import {Routes, Route,  BrowserRouter as Router} from "react-router-dom";

import { Login } from "./assets/pages/Login";
import { Register } from "./assets/pages/Register";
import { ForgotPass } from "./assets/pages/ForgotPass";

export const Pages: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/cadastro" element={<Register/>} />
                <Route path="/recuperar" element={<ForgotPass/>} />
            </Routes>
        </Router>
    )
}