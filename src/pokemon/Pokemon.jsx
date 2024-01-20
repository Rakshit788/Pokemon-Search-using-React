import React from "react";
import './pokemon.css' 
import { Link } from "react-router-dom";


    
    function PokemonRender({ name, image1, id }) {
      return (
        <>
          <Link to={`/pokemon/${id}`}>
            <div>
              <h1>{name}</h1>
              <img className="img" src={image1} alt="" />
            </div>
          </Link>
        </>
      );
    }
    
    export default PokemonRender;
    

