import "./App.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";

const App = () => {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<OrderHistory />} />
      </Routes>
      
    </div>
  );
};

export default App;
