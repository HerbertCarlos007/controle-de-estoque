import './App.css';
import {Header} from './components/Header'
import { GlobalStyle } from './globalStyles';
import {CreateProducts} from './components/createProducts'

function App() {
  return (
   <>
    <GlobalStyle/>
    <Header/>
    <CreateProducts/>
   </>
  
  );
}

export default App;
