// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartaMitologica from './components/CartaMitologica';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Página Inicial</h1>} />
        <Route path="/carta" element={<CartaMitologica />} />
      </Routes>
    </BrowserRouter>
  );
}
