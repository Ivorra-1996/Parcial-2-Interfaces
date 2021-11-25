import React from "react";
import { Fragment } from "react";
import "../styles/botones.css";

const Buscador = ({consultarApi,trago,setTrago}) =>{
    return(
        <Fragment>
            <div className="d-flex flex-wrap">
                <form className="mx-auto d-block">
                    <input type="text" placeholder="Search..." aria-label="Search" onChange={e=> setTrago(e.target.value)} required/>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"s",trago)}>Buscar</button>
                </form>
            </div>
            <br/>
                <div className="text-center ">
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","a")}>a</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","b")}>b</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","c")}>c</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","d")}>d</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","e")}>e</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","f")}>f</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","g")}>g</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","h")}>h</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","i")}>i</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","j")}>j</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","k")}>k</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","l")}>l</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","m")}>m</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","n")}>n</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","o")}>o</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","p")}>p</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","q")}>q</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","r")}>r</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","s")}>s</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","t")}>t</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","v")}>v</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","w")}>w</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","y")}>y</button>
                    <button className="btn btn-warning" type="submit" onClick={(e) => consultarApi(e,"f","z")}>z</button>
                </div>
        </Fragment>
    );
}
export default Buscador;