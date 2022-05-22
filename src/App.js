
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase';
import Navbar from './Pages/Shared/Navbar';



function App() {
  return (
    <div>
        <Navbar></Navbar>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="pruchase" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
