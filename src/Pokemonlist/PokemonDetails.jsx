import React from "react";
import { useParams } from "react-router-dom";
import UsePokemonDetails from "../../hooks/usePokemondetails";

function Pokemondetail({pokemonname}) {
  const { id } = useParams();
  const [pokemondl] = UsePokemonDetails(id, pokemonname);

  return (
    <div>
      {pokemondl ? (
        <>
          <h1>name: {pokemondl.name} </h1>
          <img src={pokemondl.image} alt="" />
          <p>weight: {pokemondl.weight}</p>
          <p>height: {pokemondl.height}</p>
          <div>types: {pokemondl.types}</div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Pokemondetail;


