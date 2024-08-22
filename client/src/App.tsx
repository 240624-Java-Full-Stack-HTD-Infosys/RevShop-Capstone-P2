import "./App.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import NavBar from "./Pages/NAVBAR/NavBar";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import CartPage from "./Pages/CartPage/CartPage";
import ProductsPage from "./Pages/ProductPage/ProductPage";

const App = () => {
  return (
    <div className="App">
     
      <Routes>
        {/*Routes without NavBar */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Routes with NavBar included directly */}
        <Route path="/home" element={<><NavBar /><Home /></>} />
        <Route path="/products" element={<><NavBar /><ProductsPage /></>} />
        <Route path="/profilePage" element={<><NavBar /><ProfilePage /></>} />
        <Route path="/cart" element={<><NavBar /><CartPage /></>} />
      </Routes>
      
    </div>
  );
};

export default App;
