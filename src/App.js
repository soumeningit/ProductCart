import NavBar from "./Componets/NavBar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div >
      <div className="bg-[#007bff]">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
