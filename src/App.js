import {Fragment, useState} from 'react';
import Trago from './complementos/Trago';
import Buscador from './complementos/Buscador';
import ConteinerTragos from './complementos/ConteinerTragos';

function App() {
  const[tragos,agregarCotelPorLetra] = useState([]);
  const[trago,setTrago] = useState("");
  
  const consultarApi = async(e,strNombreDelTrago) =>{
    e.preventDefault()
    try {
      if(strNombreDelTrago !== ""){ 
        console.log("Cargando Tragos")
        const api = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strNombreDelTrago}`);
        const listaDetragos = await api.json();
        listaDetragos.drinks !== null
        ?
          agregarCotelPorLetra(listaDetragos.drinks) 
        : 
          alert("No se encuentra el trago");
      }
    } catch (error) {
      console.log("Error:" + {error})
    }
  }
  
  return (
    <Fragment>
      <div className="text-center">
        <div className="text-light">
          <h2>Cocteleria </h2>
          <h1>"El Pipex"</h1>
          <h2>Buscar Tragos por nombre</h2>
        </div>
      </div>
      <Buscador
        consultarApi = {consultarApi}
        trago = {trago}
        setTrago = {setTrago}
      />
      <br/>
      <ConteinerTragos>
        {tragos.map(trago => 
            (
              <Trago 
                key = {trago.idDrink}
                trago = {trago}
              />
            )
          )
        }
      </ConteinerTragos>
    </Fragment>
  );
}

export default App;
