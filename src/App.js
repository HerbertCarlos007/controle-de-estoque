import './App.css';
import { GlobalStyle } from './globalStyles';
import { ShowProducts } from './components/ShowProducts'
import { HomePageStore } from './components/HomePageStore'
import { ShowEachProduct } from './components/ShowEachProduct'
import { RecoverPassword } from './components/RecoverPassword'
import { NewPassword } from './components/NewPassword'
import { Cart } from './components/Cart';
import { Login } from './components/Login'
import { ProSidebarProvider } from 'react-pro-sidebar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <GlobalStyle />
        <ProSidebarProvider>
          <Routes>
            <Route path='/inventory' element={<ShowProducts />}></Route>
            <Route exact path='/' element={<HomePageStore />}></Route>
            <Route path='/product/:id' element={<ShowEachProduct />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='/recoverPassword/:id' element={<RecoverPassword />}></Route>
            <Route path='/newPassword' element={<NewPassword />}></Route>
          </Routes>
        </ProSidebarProvider>
      </Router>
    </>

  );
}

export default App;
