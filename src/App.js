import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wedding from './pages/Wedding';

import EventPrive from './pages/EventPrive';
import EventPro from './pages/EventPro';
import PiqueNique from './pages/PiqueNique';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Blog from './pages/Blog';
import Single from './components/blog_page/blog_single/Single';
import WeddingP from './components/portfolio_page/photo_wedding/WeddingP';
import PicnicP from './components/portfolio_page/photo_picnic/PicnicP.js';
import PriveP from './components/portfolio_page/photo_prive/PriveP.js';
import ProP from './components/portfolio_page/photo_pro/ProP.js';
import Offres from './pages/Offres';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Idylle' element={<Home />} />

          <Route path='/pique-nique' element = {<PiqueNique />} />
            <Route path='/wedding-planner' element= {<Wedding /> } />
          
          {/* Evenement privé */}
          <Route path='/evenements-prives' element={<EventPrive />} />

          {/* Evenement pro */}
          <Route path='/evenements-professionnels' element={<EventPro />} />

          {/* Offres */}
          <Route path='/offres-exception' element = {<Offres />} />

          {/* Portfolio */}
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='/portfolio/mariage' element={<WeddingP />} />
          <Route path='/portfolio/pique-nique' element={<PicnicP />} />
          <Route path='/portfolio/evenements-prives' element={<PriveP />} />
          <Route path='/portfolio/evenements-professionnels' element={<ProP />} />
          
          {/* Blog */}
          <Route path='/blog' element = {<Blog/>} />
          <Route path='article' element ={<Single />} />

          {/* Formulaire */}
          <Route path='/reservation' element = {<Contact/>} />
          
          <Route path='*' element= {<Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
