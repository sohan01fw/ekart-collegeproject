import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Cart from "./components/Cart";
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
