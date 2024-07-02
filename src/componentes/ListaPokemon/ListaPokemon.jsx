const ListaPokemon = ({ listaPokemon }) => {
  return (

    <>
      <ul>
        {listaPokemon.map((pokemon, index) => {
          return (
            <li key={index} >
              {pokemon.name}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ListaPokemon;