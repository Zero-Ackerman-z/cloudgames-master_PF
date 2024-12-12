/*
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import MainHeader from "./common/MainHeader";
import MainNav from "./common/MainNav";
import MainFooter from "./common/MainFooter";
import Login from "./pages/Login";
import Game from "./pages/Game";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import Game4 from "./pages/Game4";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("userId"));

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const PrivateRoute = ({ element }: { element: JSX.Element }) => {
        return isAuthenticated ? element : <Navigate to="/login" />;
    };

    return (
        <BrowserRouter>
            <MainHeader />
            <MainNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/game" element={<PrivateRoute element={<Game />}  />} />
                <Route path="/game2" element={<PrivateRoute element={<Game2 />} />} />
                <Route path="/game3" element={<PrivateRoute element={<Game3 />} />} />
                <Route path="/game4" element={<PrivateRoute element={<Game4 />} />} />
            </Routes>
            <MainFooter />
        </BrowserRouter>
    );
}

export default App;
*/

import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import MainHeader from "./common/MainHeader";
import MainNav from "./common/MainNav";
import MainFooter from "./common/MainFooter";
import Login from "./pages/Login";
import Game from "./pages/Game";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import Game4 from "./pages/Game4";
import Game5 from "./pages/Game5";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("userId"));

    const handleLogin = () => {
        localStorage.setItem("userId", "valor"); 
        setIsAuthenticated(true);
    };

    const PrivateRoute = ({ element }: { element: JSX.Element }) => {
        return isAuthenticated ? element : <Navigate to="/login" />;
    };

    return (
        <>
            <BrowserRouter>
                <MainHeader />
                <MainNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/game" element={<PrivateRoute element={<Game />}  />} />
                    <Route path="/game2" element={<PrivateRoute element={<Game2 />} />} />
                    <Route path="/game3" element={<PrivateRoute element={<Game3 />} />} />
                    <Route path="/game4" element={<PrivateRoute element={<Game4 />} />} />
                    <Route path="/game5" element={<PrivateRoute element={<Game5 />} />} />

                </Routes>
                <MainFooter />
            </BrowserRouter>
        </>
    );
}

export default App;


