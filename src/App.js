
import './App.css';

import Navbar from './Components/Navbar';
import ProductContextProvider from './Global/ProductContext';
import Products from './Components/Products';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Components/Cart';
import Banner from './Components/Banner';


function App() {
  return (
    <ProductContextProvider>
  
    <BrowserRouter>
    <Navbar/>
    <Banner/>
  {/* <Products/> */}
      <Routes>
        <Route path="/" Component={Products}/>
        <Route path="/cart" Component={Cart}/>
      </Routes>
    </BrowserRouter>
      
     
      
   
   
    </ProductContextProvider>
     
     
   
  );
}

export default App;
