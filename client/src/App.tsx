import "./App.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Product from "./Pages/Product";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
import WaiyatNavbar from './Pages/waiyatNavbar';
import './CSS/waiyat.css';

function App() {
  return (
    
    <div className="App">
     
     <WaiyatNavbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        {/* I use param so just follow this uri mapping : this note fro braxton dont deleted until braxton done his part */}
        <Route path="/products/details/:productId" element={<ProductDetails />} />

        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<OrderHistory />} />
      </Routes>
      
    </div>
  );
}

export default App;
