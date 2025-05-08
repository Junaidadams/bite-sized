import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RequestOrder from "./pages/RequestOrder";

import NoPage from "./pages/NoPage";
import Products from "./pages/Products";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/request-order" element={<RequestOrder />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
