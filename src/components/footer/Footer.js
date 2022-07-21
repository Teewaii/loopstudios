import "./Footer.css"
import logo from "../../assets/logo.svg"
import face from "../../assets/icon-facebook.svg"
import twit from "../../assets/icon-twitter.svg"
import pinterest from "../../assets/icon-pinterest.svg"
import instagram from "../../assets/icon-instagram.svg"

export default function Footer(){
    
    return(       
        
        <div className="footer">
                       
                       
            <div className="navigation">
            <div className="logo"><img src={logo} alt="" /></div>
                <ul className="social-links">
                <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>   
                    
                </div>

          <div className= "social-list">   
                <ul className="list-items">
                    <li><a href="#"><img src={face} alt="" /></a></li>
                    <li><a href="#"><img src={twit} alt="" /></a></li>
                    <li><a href="#"><img src={pinterest} alt="" /></a></li>
                    <li><a href="#"><img src={instagram} alt="" /></a></li>
                </ul>   
                <div className="copyright">
                        <span>&#169;2021 Loopstudios, All rights reserved.</span>
                    </div>
                </div>
                
           
       
         </div>
    )
}



