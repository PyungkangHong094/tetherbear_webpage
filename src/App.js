import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Partnership from "./components/Partnership";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";

import VantageGuide from "./components/exchanges/Vantage"; // ✅ 추가
import AvaTradeGuide from "./components/exchanges/AvaTrade";
import AxiGuide from "./components/exchanges/Axi";
import OKXGuide from "./components/exchanges/OKX";
import BinanceGuide from "./components/exchanges/Binance";
import BybitGuide from "./components/exchanges/Bybit";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        {/* ✅ 가이드 */}
        <Route path="/exchanges/vantage" element={<VantageGuide />} />{" "}
        <Route path="/exchanges/avatrade" element={<AvaTradeGuide />} />
        <Route path="/exchanges/axi" element={<AxiGuide />} />
        <Route path="/exchanges/okx" element={<OKXGuide />} />
        <Route path="/exchanges/binance" element={<BinanceGuide />} />
        <Route path="/exchanges/bybit" element={<BybitGuide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
