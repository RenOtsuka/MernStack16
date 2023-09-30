import React from "react";
import { NavLink} from "react-router-dom";


let Header = (props)=>{
    return(
        <>
            <div>
                <NavLink to="/product" className="button" activeclassname="success" >Product</NavLink> <br/><br/>
                <NavLink to="/lifecycle" className="button" activeclassname="success" >LifeCycle</NavLink>
            </div>
        </>
    );
}

export default Header;