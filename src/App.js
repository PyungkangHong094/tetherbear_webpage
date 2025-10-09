import './App.css';
import Home from './components/Home';
import Product from './components/Product';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
