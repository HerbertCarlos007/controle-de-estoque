import './App.css';
import { GlobalStyle } from './globalStyles';
import { ShowProducts } from './components/ShowProducts'
import { HomePageStore } from './components/HomePageStore'
import { ShowEachProduct } from './components/ShowEachProduct'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
      <Router>
      <GlobalStyle />

        <Routes>
          <Route path='/inventory' element={<ShowProducts/>}></Route>
          <Route exact path='/' element={<HomePageStore/>}></Route>
          <Route path='/product/:id' element={<ShowEachProduct/>}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
