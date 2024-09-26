import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutpage from './page/Aboutpage';
import Homepage from './page/Homepage';
import LoginPage from './page/LoginPage';
import ProductDetail from './page/ProductDetail';
import Productpage from './page/Productpage';
import Userpage from './page/Userpage';

function App() {
  
  const [authenticate, setAuthenticate ]= useState(true);
  
  const PrivateRoute = () =>{
    return authenticate === true?<Userpage />:<Navigate to='/login'/>
    //Navigate 컴포넌트는 navigate 함수와 다름. Redirect해서 로그인이 안되어 있으면 login페이지로 이동
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about'element={<Aboutpage />}></Route>
        <Route path='/products' element={<Productpage/>}></Route>
        <Route path='/products/:id' element={<ProductDetail/>}></Route>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/user' element={<PrivateRoute/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
