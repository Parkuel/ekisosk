import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {Routes, Route} from "react-router-dom";
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route 
          path="/checkout" 
          element={
          <>
            <Header />
            <Checkout />
          </>                  
          } 
          />

          <Route 
          path="/" 
          element={ 
          <>
            <Header />
            <Home />
          </>
          } 
          />
        </Routes>
    </div>
  );
}

export default App;
