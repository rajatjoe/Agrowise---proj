import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import './index.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Features from './pages/Features';
import Suggestion from './pages/Suggestion';
<<<<<<< HEAD
=======
import Diseasse from './pages/Diseasse';
>>>>>>> 25391c22eefe54048c640bba353272bb6a555c03
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
<<<<<<< HEAD
            <Route path='/scheme' element={<Schemes />} />

=======
            <Route path='/Diseasse' element={<Diseasse />} />
            <Route path='/scheme' element={<Schemes />} />
>>>>>>> 25391c22eefe54048c640bba353272bb6a555c03
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
