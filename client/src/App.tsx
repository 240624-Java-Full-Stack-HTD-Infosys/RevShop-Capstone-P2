import "./App.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductName from "./Pages/ProductName";
const App = () => {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/search" element={<ProductName/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
