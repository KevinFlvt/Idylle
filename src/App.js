import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
/* import Prestylle from './pages/Prestylle';
 */import Toumblak from './pages/Toumblak';
import Kaladja from './pages/Kaladja';
import Mennde from './pages/Mennde';
import Wedding from './pages/Wedding';

import EventPrive from './pages/EventPrive';
import EventPro from './pages/EventPro';
import EventBoutique from './pages/EventBoutique';
import PiqueNique from './pages/PiqueNique';
import Portfolio from './pages/Portfolio';
/* import Faq from './pages/Faq'; */
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

          <Route path='/pique-nique' element = {<PiqueNique />} />
            <Route path='/pique-nique/toumblak' element = {<Toumblak />} />
            <Route path='/pique-nique/kaladja' element = {<Kaladja />} />
            <Route path='/pique-nique/mennde' element = {<Mennde />} />
            <Route path='/wedding-planner' element= {<Wedding /> } />
          
          {/* Evenement privé */}
          <Route path='/evenements-prives' element={<EventPrive />} />

          {/* Evenement pro */}
          <Route path='/evenements-professionels' element={<EventPro />} />


          <Route path='/decoration-boutique' element={<EventBoutique />} />

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
