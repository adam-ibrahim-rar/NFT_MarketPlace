import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SingUp from "./Pages/SingUp";
import Ranking from "./Pages/Ranking";
import MarketPlace from "./Pages/MarketPlace";
import NotFound from "./Pages/NotFound";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import "./Style/App.css";
import { AuthProvider } from "./Context/AuthContext";
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Ranking" element={<Ranking />} />
          <Route path="/MarketPlace" element={<MarketPlace />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
