import React from "react";
import { useParams, useNavigate } from "react-router-dom";

let About = ()=>{

    let params = useParams();   

    //let param = params["id"] ? params["id"]: "No Params"; //if there's a param with id in the url, saves it

    let param = params && params["id"] ? params["id"]: "No Params"; //debugger

    let goToUser = useNavigate();

    let onGoToUserClick = (evt)=>{
        goToUser("/user");
        
        evt.preventDefault();//it stops the default behaviour like event propagation
    }

    return(
        //<form action="/saveUser" onSubmit={onGoToUserClick}>
            <div className="about" >  
                <h2>We promise to support .... </h2>  
                <p className="about-content">If you’re looking for a job—a great job—we can help  
                    you get in the door at some incredible companies.  
                    Need to hire good people? We know thousands.  
                    Let us introduce you. No matter where you are,  
                    we can help you get where you want to go in your career.  
                </p>  
                <p>id = {param}</p>
                
                <button className={"form-control btn btn-primary col-md-2"} onClick={onGoToUserClick} //onSubmit={onGoToUserClick} 
                >Go To User</button>
            </div>
        //</form>
    )
}

export default About;