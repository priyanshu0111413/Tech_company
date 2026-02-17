import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../components/Services"
import About from "../Pages/About";
import Contact from "../Pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
