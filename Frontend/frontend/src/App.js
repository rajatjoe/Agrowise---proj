import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import './index.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Features from './pages/Features';
import Suggestion from './pages/Suggestion';

function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className='container-page'>
      <Router>
        <header>
          <div>
            <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
          </div>
        </header>
        <Navbar show={showNav} />

        <div className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/feature' element={<Features />} />
            <Route path='/suggestion' element={<Suggestion />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
