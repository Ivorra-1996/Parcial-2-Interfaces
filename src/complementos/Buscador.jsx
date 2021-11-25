import React from "react";
import { Fragment } from "react";
import "../styles/botones.css";

const Buscador = ({consultarApi,trago,setTrago}) =>{
    return(
        <Fragment>
            <div className="d-flex flex-wrap">
                <form className="mx-auto d-block">
                    <input type="text" placeholder="Search..." aria-label="Search" onChange={e=> setTrago(e.target.value)} required/>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,trago)}>Buscar</button>
                </form>
            </div>
        </Fragment>
    );
}
export default Buscador;