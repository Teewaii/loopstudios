
import "./creations.css"
import React,{useState} from "react"
import deep from "../../assets/mobile/image-interactive.jpg"


export default function Creations(){
    return(
   <div className="creation-container">
    <div className="deep-earth">
        {/* <img src={leaderPhoto} alt="" /> */}
    </div>
    <div className="content">
        <h1 className="leader-header">Our creations</h1>
        <p className="leader-body">
        Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
        </p>
    </div>
   </div>
    )

}