import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";


const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product-details" element={<ProductDetails />} /> 
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;


