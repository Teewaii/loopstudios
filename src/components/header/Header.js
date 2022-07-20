import "./Header.css"
import logo from "../../assets/logo.svg"
import hamburger from "../../assets/icon-hamburger.svg"
export default function Header(){
    return(
        
        <div className="hero">
         <nav>
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="main-nav">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>    
                            
            </div>
            <div className="hamburger">
                    <img src={hamburger} alt="" />
                    </div>
         </nav>
         
         <div className="header-ms">
                <h1>Immersive experiences that deliver</h1>
            </div>
         </div>
    )
}



