
import "./creations.css"
import React,{useState} from "react"
// import products from "../../assets/creations"

export default function Creations(){
    return(
       
   <div className="creation-container">
          <h1 className="creation-heading">Our creations</h1>

          <div className="creations-items">
               <div className="deep-earth card">
                    <h1 className="title">Deep earth</h1>
               </div>
               <div className="Night-arcade card">
                    <h1 className="title">Night arcade</h1>
               </div>
               <div className="soccer card">
                    <h1 className="title">soccer team vr</h1>
               </div>
               <div className="the-grid card">
                    <h1 className="title">the grid</h1>
               </div>
               <div className="from-up card">
                    <h1 className="title">from up above vr</h1>
               </div>
               <div className="pocket card">
                    <h1 className="title">pocket borealis</h1>
               </div>
               <div className="curiosity card">
                    <h1 className="title">the curiosity</h1>
               </div>
               <div className="fisheye card">
                    <h1 className="title">make it fisheye</h1>
               </div>

               <div className="see-all">
                    <button name="see-all">See all</button>
               </div>
               </div>
    
   </div>
    )

}