import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-row">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>;
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
