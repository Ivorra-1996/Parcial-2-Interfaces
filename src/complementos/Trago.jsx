import React from "react";
import '../styles/trago.css';

const Trago = ({trago})=>{
    const {strDrink,strAlcoholic,strCategory,strDrinkThumb,strInstructions,strGlass} = trago

    return(
        <div className="px-4 py-0">
            <div className="card m-5 p-3 bg-dark" style={{width:330}}>
                <div >
                    <img src={strDrinkThumb} className="card-img-top" alt="Imagen de trago"/>
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{strDrink}</h5>
                    <h6>Instrucciones:</h6>
                    <p className="card-text">{strInstructions}</p>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Recipiente: {strGlass}</li>
                    <li className="list-group-item">Categoria: {strCategory}</li>
                    <li className="list-group-item">Tipo de bebida: {strAlcoholic}</li>
                </ul>
                </div>
                
            </div>
        </div>
    );
}
export default Trago;