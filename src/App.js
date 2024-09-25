import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutpage from './page/Aboutpage';
import Homepage from './page/Homepage';
import ProductDetail from './page/ProductDetail';
import Productpage from './page/Productpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about'element={<Aboutpage />}></Route>
        <Route path='/products' element={<Productpage/>}></Route>
        <Route path='/products/:id' element={<ProductDetail/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
