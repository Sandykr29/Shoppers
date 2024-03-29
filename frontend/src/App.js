
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Components/Pages/Shop';
import { ShopCategory } from './Components/Pages/ShopCategory';
import { Product } from './Components/Pages/Product';
import { Cart } from './Components/Pages/Cart';
import { LoginSignup } from './Components/Pages/LoginSignup';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/mens" element={<ShopCategory category="men"/>}/>
      <Route path="/womens" element={<ShopCategory category="women"/>}/>
      <Route path="/kids" element={<ShopCategory category="kids"/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/:productId" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
    </div>
  );
}

export default App;
