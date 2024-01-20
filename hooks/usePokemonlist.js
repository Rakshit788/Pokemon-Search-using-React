import React, { useEffect, useState } from "react";


function usePokemonlist(url , type ){

    const [pokemonlistState, setpokemonlistState] = useState({
        pokemon_list : []  ,
        pokedex : url ,
        nexturl : "" ,
        prevurl : ""
        
        
        })



        let ResponseFunction = async () => {
          try {
            const response = await fetch(pokemonlistState.pokedex);
            const responseData = await response.json();
        
            if (!response.ok) {
              throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }
        
            const result = responseData.results;
        
            if (type) {
              console.log(`type`);
              setpokemonlistState((state) => (
                {...state,
                  pokemon_list : responseData.pokemon.slice(0,5)
      
                }
               
              )) ;

              console.log(pokemonlistState.pokemon_list);
            } else {
              let PokemonFetchData = async (p) => {
                const pokedata = await fetch(p.url);
                const pokedatajson = await pokedata.json();
                return pokedatajson;
              }
        
              const FetchedpokemonDatainArray = await Promise.all(result.map((pokemonobj) => PokemonFetchData(pokemonobj)));
        
              const PokemonDta = FetchedpokemonDatainArray.map((pokemon) => {
                return {
                  id: pokemon.id,
                  name: pokemon.name,
                  ImageUrl: pokemon.sprites.other['dream_world'].front_default,
                  type: pokemon.types[0].type
                }
              });
        
              setpokemonlistState({
                ...pokemonlistState,
                pokemon_list: PokemonDta,
                nexturl: responseData.next,
                prevurl: responseData.previous
              });
            }
          } catch (error) {
            console.error('Error in ResponseFunction:', error);
          }
        }
        
      

  
  useEffect(() => {
    ResponseFunction();
  }, [pokemonlistState.pokedex]); 

  useEffect(() => {
    console.log(pokemonlistState.pokemon_list);
  }, [pokemonlistState.pokemon_list]);





return { pokemonlistState , setpokemonlistState} ; }





export default usePokemonlist