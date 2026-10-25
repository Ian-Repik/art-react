 import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import InProgress from "./pages/InProgress";
import RelicsAndRelief from "./pages/RelicsAndRelief";
import SquidSlab from "./pages/SquidSlab";
import AlienSkateboard from "./pages/AlienSkateboard";
import SkeletonPoster from "./pages/SkeletonPoster";
import AlienCat from "./pages/AlienCat";

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
 <div className="app-content">
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/in-progress" element={<InProgress />} />
                    <Route path="/relics-and-relief" element={<RelicsAndRelief />} />
                    <Route path="/squid-slab" element={<SquidSlab />} />
                    <Route path="/alien-skateboard" element={<AlienSkateboard />} />
                    <Route path="/skeleton-poster" element={<SkeletonPoster />} />
                    <Route path="/alien-cat" element={<AlienCat />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;