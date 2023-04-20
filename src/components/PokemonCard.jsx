import React from "react";

function PokemonCard(props) {
    //const pokemon = pokemonList[0];
    console.log(props);
    const { pokemon } = props;

  return (
    <figure>
      {pokemon.imgSrc ? (<img src = {pokemon.imgSrc}/> ): <p>???</p>}
      <figcaption>bulbasaur</figcaption>
    </figure>
  );
}

export default PokemonCard;



