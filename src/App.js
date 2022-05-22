
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Footer from './Pages/Home/Footer';


import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase';
import Navbar from './Pages/Shared/Navbar';



function App() {
  return (
    <div className='app'>
        <Navbar></Navbar>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="pruchase" element={<Purchase />} />
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
