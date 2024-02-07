import { useState, useEffect } from "react";
import "./App.css";
import Navbar from './components/Navbar'; 
import NewsList from './components/NewsList';
import Footer from'./components/Footer';

export default function App() {
  const hackerNewsAPI = "http://hn.algolia.com/api/v1/search?query=50";
  const [data, setData] = useState([]);


const fetchData = async () => {
  try {
    const res = await fetch(hackerNewsAPI);
    const data = await res.json();
    setData(data.hits);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchData();
}, []);

  return (
    <>
    <Navbar data={data}/>


    <NewsList data={data} />
    {console.log(data)};
    
    <Footer/>
    </>
  )
}
