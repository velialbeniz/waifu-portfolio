import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
        {/* Sidebar */}
        <Sidebar />
        <div className="wrapper">
            <span>yasemin albeniz</span>
            <div className="social">
                <a href="#"><img src="./facebook.png" /></a>
                <a href="#"><img src="./instagram.png" /></a>
                <a href="#"><img src="./behance.png" /></a>
                <a href="#"><img src="./linkedin.png" /></a>
                <a href="#"><img src="./dribbble.png" /></a>
            </div>
        </div>
    </header>
  )
}

export default Navbar