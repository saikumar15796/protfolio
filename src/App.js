
import './App.css';
import Home from './home' ;
import About from './about';
import Intro from './intro';
import Contact from './contact';
import Projects from './project';
import { HashRouter as Router,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
   <>
   <Router>
   <Routes>
    <Route path="/" element={<Home />}>
          <Route index element={<Intro />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
     </Route>
   </Routes>
   
   </Router>
   </>
  );
}

export default App;
