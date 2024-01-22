import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar"
import ProductAll from "./page/ProductAll"
// 여러가지를 한번에 가지고 오고 싶을 때 {}를 이용
// import { Button } from 'react-bootstrap';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>} />
      </Routes>
    </div>
  );
}

export default App;
