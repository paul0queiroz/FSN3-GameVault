import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

// import Home from "./pages/Home";
// import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/produtos" element={<Products />} /> */}
        <Route path="/produto/:id" element={<ProductDetail />} />
        {/* <Route path="/carrinho" element={<Cart />} /> */}
        {/* <Route path="/contato" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
