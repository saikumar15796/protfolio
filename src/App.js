
import './App.css';
import Home from './home' ;
import About from './about';
import Intro from './intro';
import Contact from './contact';
import Projects from './project';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}>
          <Route index element={<Intro />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
     </Route>
   </Routes>
   
   </BrowserRouter>
   </>
  );
}

export default App;
