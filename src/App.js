import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SingleNews from './components/SingleNews';
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Helmet from 'react-helmet'
function App() {
  

  return (
    <div className=" flex flex-col justify-between min-h-screen">
    <div>
    <Navbar />
    <Outlet />
    </div>
    <Footer />
    </div>
  );
}

export default App;

