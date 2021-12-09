import React, { useRef, useState } from 'react'; 
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner'
import Service from './components/Service/Service'
import Recommend from './components/Recommend/Recommend';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
function App() {
  
  return (
    <>
      <Navbar/>
      <Banner/>
      <Service/>
      <Recommend/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
