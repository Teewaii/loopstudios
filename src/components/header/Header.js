import "./Header.css"
import logo from "../../assets/logo.svg"
import hamburger from "../../assets/icon-hamburger.svg"
import closeMenu from "../../assets/icon-close.svg"
import React,{useState} from "react"

export default function Header(){
   
    const [toggle, setToggle]= React.useState(false)

    function Toggle(){
        setToggle(prevToggle=>
            !prevToggle
        )
    }

    function Close(){
        setToggle(prevToggle=>
            !prevToggle
        )
    }
    return(       
        
        <div className="hero">
         <nav>
            <div className="logo"><img src={logo} alt="" /></div>
           
            <div className= {toggle?"main-nav active":"main-nav"}>
              
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>   
                 
                <span className="closeMenu" onClick={Close}>
                    <img src={closeMenu} alt="" />
                    </span>       
            </div>
            
            <div className="hamburger" onClick={Toggle} >
                    <img src={hamburger} alt="" />
                    </div>
                    
         </nav>
         
         <div className="header-ms">
                <h1>Immersive experiences that deliver</h1>
            </div>
         </div>
    )
}



