import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [userInput, setUserInput] = useState("");

  const handleSearch = async () => {
    try {
      const res = await fetch(`http://hn.algolia.com/api/v1/search?query=${userInput}`);
      const data = await res.json();
      onSearch(data.hits);
    } catch (err) {
      console.log(err);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }
  return (
    <div className="navbar">
      <div className="navbarItems">
        <b className="h2"> <a href="https://news.ycombinator.com/">Hacker News</a></b>
        <a href="">News</a> 
        <a href="">Past</a>  
        <a href="">Comments</a> 
        <a href="">Ask</a>
        <a href="">Show</a>  
        <a href="">Jobs</a> 
        <a href="">Submit</a> 
      </div>
       
      <div className="search">
        <input 
          type="text"
          value={userInput} 
          onChange={(e)=> setUserInput(e.target.value)} 
          onKeyDown={handleKeyDown} // Add event listener for keydown
          placeholder="Search"/>
        <button className="button" onClick={handleSearch}>Search</button>
      </div>
       
      <div className="login">
        <a href="">Login</a>
      </div>
    </div>
  );
}
