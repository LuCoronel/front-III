import React from "react";
import Pokemons from "../Pokemons/Pokemons";

//Componente padre PokemosList que a su vez esta renderizando al componente hijo Pokemons
export const PokemonList = () => {
  return <div> <Pokemons/> </div>;
};

