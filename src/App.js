import React from 'react';
import './App.css';
import BridalMain from "./pages/BridalMain";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BridalBouquetPage from "./pages/BridalBouquet";
import BridalBouquetEnglishPage from "./pages/BridalBouquetEnglish"; // Import the new BridalBouquetEnglish component

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <BridalMain />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/bridal-bouquet' element={<BridalBouquetPage />} />
                    <Route path='/bridal-bouquet-english' element={<BridalBouquetEnglishPage />} /> {/* Add the new route */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
