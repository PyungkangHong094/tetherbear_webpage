import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Partnership from "./components/Partnership";
import VantageGuide from "./components/exchanges/Vantage"; // ✅ 추가

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/exchanges/vantage" element={<VantageGuide />} />{" "}
        {/* ✅ Vantage 가이드 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
