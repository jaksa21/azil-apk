import { Component } from "react";
import "./Navbar.css"
import { MenuItems } from "./MenuItems";
import {Link} from "react-router-dom"


class Navbar extends Component {
    render(){
        return(
            <nav className="navbar">
                <h1 className="navbar-logo">Animal shelter Split</h1>
                
                <ul className="navbar-list">
                    {MenuItems.map((item, index) => {
                        return(
                           <li> 
                                <Link className={item.cName} to={item.url} >{item.title}</Link> 
                                
                            </li>
                           
                        )
                    })}
                    
                    
                </ul>

            </nav>
        )
    }
}

export default Navbar