import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import './index.css';
import Features from './pages/Features';
import Home from './pages/Home';
import Suggestion from './pages/Suggestion';
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
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
