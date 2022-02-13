
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './views/Header/Header';
import Home from './views/Home';

function App() {
  return (
    <div className="main_core">
      
      <Header/>

      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={ <Home />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
