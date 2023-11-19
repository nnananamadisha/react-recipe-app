//import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Sidebar({links}){
    return(
        <div className="sidebar">
            {/* //loop through the links array */}
            { links.map(link => (
                <a href="#!" key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </a>
            )) }
        </div>
    )
}