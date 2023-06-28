import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Usuarios from "./pages/Useres"
function MyRoutes() {

    return (
        <Router>
            <Routes>
            <Route  path="/" Component={Home} />
            <Route path="/usuarios" Component={Usuarios} />
            </Routes>
        </Router>

    )

}

export default MyRoutes