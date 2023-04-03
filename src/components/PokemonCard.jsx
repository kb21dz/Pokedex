import React from "react";

function PokemonCard() {
    const pokemon = pokemonList[0];
    

  return (
    <figure>
      {pokemon.imgSrc ? (<img src = {pokemon.imgSrc}/> ): <p>???</p>}
      <figcaption>bulbasaur</figcaption>
    </figure>
  );
}

export default PokemonCard;

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
