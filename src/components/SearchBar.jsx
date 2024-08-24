import React, {useRef} from 'react';


// Import utils
import {fetchCharacters} from "../utils/utils";


export default function SearchBar({setter}) {
  let input = useRef("");

  const handleClick = async (e) => {
    e.preventDefault();
    let value = input.current.value;
    if(value === "") return;
    
    try{
      let heroes = await fetchCharacters(value)
      setter(heroes);
    }catch(err){
      return console.error(err);
    }
  };
  return (
    <form>
      <input type ="text" placeholder= "Search Hero..." ref = {input} />
      <button onClick={handleClick}>Search</button>
    </form>
  );
}
