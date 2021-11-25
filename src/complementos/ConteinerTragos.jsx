import React from "react";

const ConteinerTragos = ({children}) =>{
    return(
        <div  className ="d-flex flex-wrap">
            {children}
        </div>
    );
}
export default ConteinerTragos;