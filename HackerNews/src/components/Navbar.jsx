import { useState, useEffect} from "react";

export default function Navbar() {

const [userInput, setUserInput] = useState("");
const [searchResults, setSearchResults] = useState([]);
const [news, setNews] = useState([]);


const searchResult = async () => {
    try {
      const res = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${userInput}`
      );
      const data = await res.json();
      setSearchResults(data.hits);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchResult();
  };


useEffect(() => {
    searchResult();
  }, [userInput]);

return (

    <div className="navbar">
        <div className="navbarItems">
            <b className="h2"> <a href="https://news.ycombinator.com/">Hacker News</a></b>
                <a href="">News | </a> 
                <a href="">Past | </a>  
                <a href="">Comments | </a> 
                <a href="">Ask | </a>
                <a href="">Show | </a>  
                <a href="">Jobs | </a> 
                <a href="">Submit </a> 
        </div>
       
        <div className="search">
            <input 
            type="text"
            value={userInput} 
            onChange={(e)=>setUserInput(e.target.value)} 
            placeholder="Search"/>
            {searchResults ? searchResults.map((article) => <p>{article.title}</p>) : "Loading..."}
        </div>
       
        <div className="login">
            <a href="">Login</a>
        </div>

    </div>

);
}