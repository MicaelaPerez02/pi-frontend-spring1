import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import ProductDetails from './components/ProductInfo/ProductDetails';
import FilterCategory from './components/Cards/FilterCategory';
import FilterCities from './components/Navbar/FilterCities';
import Reservation from './components/Reservation/Reservation';
import ProgressBar from "@badrap/bar-of-progress";


import './App.css';

function App() {
  const progress = new ProgressBar({
    size: 3,
    color: "var(--complementary)",
    className: "progressBar",
    delay: 100,
  });

  progress.start();

  setTimeout(() => {
    progress.finish();
  }, 500);

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/login" element={< Login />} />
          <Route path="/register" element={< Register />} />
          <Route path="/product/:productId" element={< ProductDetails />} />
          <Route path="/category/:categoryId" element={< FilterCategory />} />
          <Route path="/cities/:citiesId" element={< FilterCities />} />
          <Route path="/product/:productId/reservation" element={< Reservation />} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default App;