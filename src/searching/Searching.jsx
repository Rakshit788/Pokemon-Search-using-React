import { useState } from "react";
import "./Search.css"
import usedebounce from "../../debounce/debounce";

function Searchlist({updatesearchterm}){

    let debounce =usedebounce((e) =>{updatesearchterm(e.target.value) 
                                             console.log(e.target.value);        })
    return(
        <>

     <input type="text" className="searchbar" placeholder="Search your Pokemon here" 
       onChange = {debounce} />

        </>
    )
}
export default Searchlist ;