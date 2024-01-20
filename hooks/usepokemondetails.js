import React, { useState, useEffect } from "react";

function UsePokemonDetails(  id,pokemonname) {
  const [pokemondl, setPokemondl] = useState({});

  async function getpokemondetails() {
    let detailofeachpokemon ;
    try {


      ; 
      if(pokemonname){
        detailofeachpokemon =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
      }
      else{
      detailofeachpokemon =  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      }
      let datajson = await detailofeachpokemon.json();
      setPokemondl({
        name: datajson.name,
        image: datajson.sprites.other['dream_world'].front_default,
        weight: datajson.weight,
        height: datajson.height,
        types: datajson.types.map((t) => React.createElement('div', { key: t.type.name }, t.type.name)),
      });
    } catch (error) {
      console.error("Error fetching Pokémon details:");
      // You might want to handle the error or set an error state here.
    }
  }

  useEffect(() => {
    getpokemondetails();
  }, [id,pokemonname]);

  return [pokemondl];
}

export default UsePokemonDetails;
