
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Packages from './pages/packages/Packages';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Error from './pages/error/Error';


function App() {
  return (
    <div className="App">
     <Navbar / >
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path='*' element={<Error />} />             
      </Routes>
                    
      <Footer />
                
    </div>
  );
}

export default App;
