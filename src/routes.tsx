
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Usuarios from "./pages/Useres"
function MyRoutes() {

    return (
        <Router>
            <Routes>
            <Route  path="/" element={<Home/>} />
            <Route path="/usuarios" element={<Usuarios/>} />
            </Routes>
        </Router>

    )

}

export default MyRoutes