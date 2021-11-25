import React from "react";

const ConteinerTragos = ({children}) =>{
    return(
        <div  className ="d-flex flex-wrap d-flex justify-content-evenly">
            {children}
        </div>
    );
}
export default ConteinerTragos;