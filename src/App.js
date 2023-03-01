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
          <Route path='/evenements-professionels' element={<EventPro />} />

          {/* Portfolio */}
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='/portfolio/mariage' element={<WeddingP />} />
          
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
