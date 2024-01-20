

import React, { useEffect, useState } from "react";
import './pokedex.css';
import PokemonRender from "./Pokemon";

import usePokemonlist from "../../hooks/usePokemonlist";
import Pokemondetail from "../Pokemonlist/PokemonDetails";
import Searchlist from "../searching/Searching";

function Pokemon() {

 const  { pokemonlistState , setpokemonlistState} = usePokemonlist("https://pokeapi.co/api/v2/pokemon", false) ;
  const [searchterm , setsearchterm] = useState('')
  return (
    <>
      <div className="head-wrapper">
        <h1 id='heading'>P O K E D E X </h1>
      <Searchlist  updatesearchterm={setsearchterm} />
        
      </div>
      {
  (!searchterm.length ) ? (
    <>
      <div className="image-gallery">
        {pokemonlistState.pokemon_list.map((p) => (
          <PokemonRender name={p.name} image1={p.ImageUrl} key={p.id} id={p.id} />
        ))}
      </div>

      <div className="buttons">
        <button
          className="btns"
          onClick={() => {
            setpokemonlistState({ ...pokemonlistState, pokedex: pokemonlistState.prevurl });
          }}
        >
          Previous
        </button>
        <button
          className="btns"
          onClick={() => {
            setpokemonlistState({ ...pokemonlistState, pokedex: pokemonlistState.nexturl });
          }}
        >
          Next
        </button>
      </div>
    </>
  ) : (
    <Pokemondetail  key={searchterm}  pokemonname = {searchterm}/>
  )
}

    </>
  )
}

export default Pokemon;
