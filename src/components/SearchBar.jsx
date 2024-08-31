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
      let characters = await fetchCharacters(value)
      setter(characters);
    }catch(err){
      return console.error(err);
    }
  };
  return (
    <form>
      <input type ="text" placeholder= "Search Character..." ref = {input} />
      <button onClick={handleClick}>Search</button>
    </form>
  );
}
