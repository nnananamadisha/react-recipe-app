//import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Sidebar({links, close}){
    return(
        <div className="sidebar" onClick={close}>
            {/* //loop through the links array */}
            { links.map(link => (
                <a className="sidebar-link" href="#!" key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </a>
            )) }
        </div>
    )
}