import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import './index.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Features from './pages/Features';
import Suggestion from './pages/Suggestion';
import Schemes from './pages/Schemes';

function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className='container-page'>
      <Router>
        <header>
          
            <GiHamburgerMenu height={100} width={100} color='white' onClick={() => setShowNav(!showNav)} />
          
          <div className='nav2'>
            <div>HOME</div>
            <div>FARMS</div>
            <div>SUGGESTION</div>
            <div>HABIBI</div>

          </div>
        </header>

        <main className='main'>
        <Navbar show={showNav} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/feature' element={<Features />} />
            <Route path='/suggestion' element={<Suggestion />} />
            <Route path='/scheme' element={<Schemes />} />

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
