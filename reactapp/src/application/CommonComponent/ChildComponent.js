import React from "react";


let ChildComponent = (props)=>{
    //props - are used to pass information from parent to child

    return(
        <>
                <h2>Header Value:  {props.header}</h2>
                <h4> Name is {props.name}</h4>

                <hr/>
                {props.children[0]}
                <hr/>
                {props.children[1]}
                <hr/>
                {props.children[2]}
                <hr/>
                <button onClick={()=>props.callBackFunc(36)} >Send Age Back To Parent</button>
        </>
    )
}

export default ChildComponent;