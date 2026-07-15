import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SingUp from "./Pages/SingUp";
import Ranking from "./Pages/Ranking";
import MarketPlace from "./Pages/MarketPlace";
import NotFound from "./Pages/NotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SingUp" element={<SingUp />} />
        <Route path="/Ranking" element={<Ranking />} />
        <Route path="/MarketPlace" element={<MarketPlace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
