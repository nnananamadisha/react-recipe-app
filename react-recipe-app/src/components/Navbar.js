//import use effect
import { useState } from "react"

export default function Navbar(){
    //state
    const [showSidebar,, setShowSidebar] = useState(false)
    return(
        <div className="navbar container">
            <a href="#!" className="logo">African<span>Food</span>Cuisine</a>
            <div className="nav-links">
                <a href="#!">Home</a>
                <a href="#!">Recipes</a>
                <a href="#!">Settings</a>
            </div>
            {/* //sidebar */}
            {/* data binding, if sidebar=true, have sidelist of sidebar & active, else have classlist of just show sidebar */}
            {/* onclick event listener, when clicked, remove bars and show sidebar */}
            <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>

        
    )
}