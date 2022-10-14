import './App.css';
import { GlobalStyle } from './globalStyles';
import { ShowProducts } from './components/ShowProducts'
import { HomePageStore } from './components/HomePageStore'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
      <Router>
      <GlobalStyle />

        <Routes>
          <Route path='/inventory' element={<ShowProducts/>}></Route>
          <Route path='/store' element={<HomePageStore/>}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
