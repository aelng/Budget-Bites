import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import { AppContextProvider } from "./contexts/AppContext";

function App() {
    return (
        <BrowserRouter>
            <AppContextProvider>
                <div className="flex flex-row">
                    <Navbar />
                    <div className="flex flex-col w-full">
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/map" element={<Map />}></Route>
                        </Routes>
                    </div>
                </div>
            </AppContextProvider>
        </BrowserRouter>
    );
}

export default App;
