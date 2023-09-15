import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; //hooks for nav

//can only return 1 parent component/tag
let Header = (props) => {

  let userName = "John";
  let goAboutHook = useNavigate();

  let goToAboutClick = (evt)=>{
        
    goAboutHook("/about/2023")

    evt.preventDefault();
}

  
  return(
    // <>
    //   <h1>Header Component</h1>
    //   <h2>Info to be shared</h2>
    // </>

    <>
      Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
      {userName == "" ?<b> Please Login to see other features</b>:""}
        
      <div>
      <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink>
      <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
      <NavLink to="/user" className="button" activeclassname="success" >User </NavLink>
      </div>
      <button onClick={goToAboutClick} >Go To About Page</button>
    </>
  );
};

export default Header;