export default function Navbar() {

return (

    <div className="navbar">

        <div className="navbarItems">
        
        <h2 className="h2">Hacker News</h2>
        
        <a href="">News</a> |
        <a href="">Past</a> | 
        <a href="">Comments</a> | 
        <a href="">Ask</a> |
        <a href="">Show</a> | 
        <a href="">Jobs</a> |
        <a href="">Submit</a> |
        </div>
        <div className="search">
            <input type="text" placeholder="Search"/>
        </div>
        <div className="login">
            <a href="">Login</a>
        </div>

    </div>

);
}