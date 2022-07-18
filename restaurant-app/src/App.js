import './App.css';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Order from "./components/Order";
import About from './pages/about';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Footer from './components/Navbar/Footer';
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  return (
    <>
      <Router>
        <Navbar />        
        <Routes>          
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/blogs' element={<Blogs/>} />

            <Route path='/order' element={<Order/>} />  
            
            <Route path='/Login' element={<Login/>} />  
            <Route path='/Register' element={<Register/>} />      
            <Route path='*' element={<Error />} />       
        </Routes>
        <Footer/>
      </Router>
      
      
    </>
  );
}

export default App;
