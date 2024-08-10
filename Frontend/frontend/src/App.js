import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import './index.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Features from './pages/Features';
import Suggestion from './pages/Suggestion';
import Diseasse from './pages/Diseasse';
import Schemes from './pages/Schemes';
import navlogo from './images/Agrowise2_noBG.png'

function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className='container-page'>
      <Router>
        <header>

          <GiHamburgerMenu height={100} width={100} color='white' onClick={() => setShowNav(!showNav)} />
          

          <div className='nav2'>

            <Link to='/' className='navitem'>HOME</Link>
            <Link to='/feature' className='navitem'>FARMS</Link>
            <Link to='/suggestion' className='navitem'>SUGGESTION</Link>
            <Link to='/scheme' className='navitem'>SCHEMES</Link>


          </div>
        </header>

        <main className='main'>
          <Navbar show={showNav} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/feature' element={<Features />} />
            <Route path='/suggestion' element={<Suggestion />} />
            <Route path='/Diseasse' element={<Diseasse />} />
            <Route path='/scheme' element={<Schemes />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
