
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router ,Route, Routes }  from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './components/Footer';
import Menü from './Pages/Menü';
import About from './Pages/About';
import Contact from './Pages/Contact';



function App() {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menü/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        
      
      
      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;
