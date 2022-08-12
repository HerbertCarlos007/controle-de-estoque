import './App.css';
import {Header} from './components/Header'
import { GlobalStyle } from './globalStyles';
import {CreateProducts} from './components/CreateProducts'
import {ShowProducts} from './components/ShowProducts'

function App() {
  return (
   <>
    <GlobalStyle/>
    <Header/>
    <CreateProducts/>
    <ShowProducts/>
   </>
  
  );
}

export default App;
