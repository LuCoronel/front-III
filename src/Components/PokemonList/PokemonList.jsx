import React from "react";
import Pokemons from "../Pokemons/Pokemons";

//Componente padre PokemosList que a su vez esta renderizando al componente hijo Pokemons
export const PokemonList = () => {
  //Le tengo que enviar al hijo Pokemons, desde el padre,éste PokemonList,
  //le mando un tipo, la idea es que el hijo reciba la prop y guarde en
  //una variable aquello pokemons en su propiedad type
  return (
    <div>
      <Pokemons type={"water"} />
    </div>
  );
};
