import "./App.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
<<<<<<< HEAD
import ProductDetails from "./Pages/ProductDetails";
=======
import Product from "./Pages/Product";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
>>>>>>> 33510595e33d80c3acee41ec9eab26d447620cc3

const App = () => {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
<<<<<<< HEAD
        
        {/* I use param so just follow this uri mapping : this note fro braxton dont deleted until braxton done his part */}
        <Route path="/products/details/:productId" element={<ProductDetails />} />
=======
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<OrderHistory />} />
>>>>>>> 33510595e33d80c3acee41ec9eab26d447620cc3
      </Routes>
      
    </div>
  );
};

export default App;
