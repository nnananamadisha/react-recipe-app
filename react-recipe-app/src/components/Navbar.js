//import use effect
import { useState } from "react"
//import Sidebar component
import Sidebar from "./Sidebar"
//import icons
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"
import {Link , useLocation }from "react-router-dom"
export default function Navbar(){
    //state
    const [showSidebar, setShowSidebar] = useState(false)
    const location = useLocation()
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }

    return(
        // because a component should only return 1 parent component 
        <>
            <div className="navbar container">
                <a href="#!" className="logo">African<span>Food</span>Cuisine</a>
                <div className="nav-links">
                    {/* loop through the links array */}
                    { links.map(link => (
                         <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }

                    {/* <a href="#!">Home</a>
                    <a href="#!">Recipes</a>
                    <a href="#!">Settings</a> */}
                </div>
                {/* //sidebar */}
                {/* data binding, if sidebar=true, have sidelist of sidebar & active, else have classlist of just show sidebar */}
                {/* onclick event listener, when clicked, remove bars and show sidebar */}
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} links={links} />}
            
        </>
        
       
        
    )
}