import './App.css';
import { useState } from 'react';
import Error from './pages/Error';
import { Container, Typography } from "@material-ui/core";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Order from "./components/Order";
import About from './pages/about';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import Login from './pages/Login';
import Footer from './components/Navbar/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>          
            <Route path='/' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/order' element={<Order/>} />  
            <Route path='/Login' element={<Login/>} />      
            <Route path='*' element={<Error />} />       
        </Routes>
      </Router>
      
      
    </>
  );
}

export default App;
