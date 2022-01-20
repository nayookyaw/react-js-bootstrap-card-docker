import logo from './profile.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

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
