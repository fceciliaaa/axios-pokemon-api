import { useState } from 'react'
import ListaPokemon from '../ListaPokemon/ListaPokemon'
import './App.css'
import axios from 'axios'

const App = () => {

  const [listaPokemon, setListaPokemon] = useState([]);

  const cargarPokemon = async () => {

    const limite = 807;
    const URL = `https://pokeapi.co/api/v2/pokemon/?limit=${limite}`
    /* en la documentacion mencionaba que al llamar a cualquier endpoint de la API sin un ID o 
    nombre de recurso, se obtendrá una lista paginada de los recursos disponibles para esa API 
    (una "página" de lista contendrá hasta 20 recursos) por ello podriamos agregar un parámetro de consulta "limit" 
    a la solicitud GET, por ejemplo, ?limit=60. Para este caso necesitabamos 807 pokemon
    */
    try {
      const respuesta = await axios.get(URL);
      setListaPokemon(respuesta.data.results);
    }
    catch (error) {
      console.log("Ocurrió un error", error);
    }

  }

  return (
    <>
      <button onClick={cargarPokemon}> Despliega la lista de pokemon </button>
      <ListaPokemon listaPokemon={listaPokemon} />
    </>
  )

}

export default App
