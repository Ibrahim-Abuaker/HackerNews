import { useState } from "react";
import "./App.css";
import Navbar from './components/Navbar'; 
import NewsList from './components/NewsList';
import Footer from'./components/Footer';

export default function App() {
  
  return (
    <>

    <Navbar/>
    <NewsList/>
    <Footer/>
      
    </>
  )
}
