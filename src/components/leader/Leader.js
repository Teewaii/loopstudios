
import "./Leader.css"

// import leaderPhoto from "../../assets/mobile/image-interactive.jpg"


export default function Leader(){
    return(
   <div className="leader-container">
    <div className="leader-pix">
        {/* <img src={leaderPhoto} alt="" /> */}
    </div>
    <div className="content">
        <h1 className="leader-header">The leader in interactive vr</h1>
        <p className="leader-body">
        Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
        </p>
    </div>
   </div>
    )

}