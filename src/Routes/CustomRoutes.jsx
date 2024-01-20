import React from "react";
import { Routes, Route } from "react-router-dom";
import Pokemon from "../pokemon/pokedex";
import Pokemondetail from "../Pokemonlist/PokemonDetails";

// function Customroutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Pokemon />} />
//       <Route path= {`/pokemon/:id`} element={<Pokemondetail />} />
//     </Routes>
//   );
// }

// export default Customroutes;
// Customroutes.js
;

function Customroutes() {
  return (
    <Routes>
      <Route path="/" element={<Pokemon />} />
      <Route path="/pokemon/:id" element={<Pokemondetail />} />
      <Route path="/pokemon/:pokemonname" element={<Pokemondetail />} />
    </Routes>
  );
}

export default Customroutes;

