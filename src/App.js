
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyProtfolio from './Pages/MyProtfolio/MyProtfolio';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase';
import Navbar from './Pages/Shared/Navbar';



function App() {
  return (
    <div className='app'>
        <Navbar></Navbar>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="pruchase" element={<Purchase />} />
        <Route path="protfolio" element={<MyProtfolio />} /> 
        <Route path="blog" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        
        
         <Route path="*" element={<NotFound />} />
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
