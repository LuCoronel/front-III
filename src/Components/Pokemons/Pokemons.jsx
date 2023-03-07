import React from "react";
import pokemonsJson from "../../../pokemons.json";
import PokemonCard from "../PokemonCard/PokemonCard";

// La idea es que el componente hijo en base al± tipo, que se lo
// envio des el padre haga ese filtrado, o acceda a essa propiedad:

function Pokemons({ type }) {
  let pokemonsbyType = pokemonsJson[type];

  return (
    <div>
      {pokemonsbyType.map((element) => {
        return <PokemonCard element={element} key = {element.id}/>;
      })}
    </div>
  );
}

export default Pokemons;
