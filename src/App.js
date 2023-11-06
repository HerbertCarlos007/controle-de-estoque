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
import { ToastContainer } from 'react-toastify';

function App() {

  const levelPermission = localStorage.getItem('level_permission');
  const userPermission = parseInt(levelPermission)

  return (
    <>
      <ToastContainer />
      <Router>
        <GlobalStyle />
        <ProSidebarProvider>
          <Routes>
            {userPermission === 1 ? (
              <Route path="/inventory" element={<ShowProducts />} />
            ) : null}
            <Route exact path='/' element={<Login />} />
            <Route path='/home' element={<HomePageStore />} />
            <Route path='/product/:id' element={<ShowEachProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/recoverPassword/:id' element={<RecoverPassword />} />
            <Route path='/newPassword' element={<NewPassword />} />
          </Routes>
        </ProSidebarProvider>

      </Router>
    </>

  );
}

export default App;
