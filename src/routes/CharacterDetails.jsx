import React, {useState, useEffect} from 'react'

// Import hooks
import {useParams} from "react-router-dom";

// Import utils
import {fetchSingleCharacter} from "../utils/utils";


export default function CharacterDetails() {
  let {id} = useParams();

  const [character, setCharacter] = useState();
  
  useEffect(() => {
    fetchSingleCharacter(id)
      .then((data) => setCharacter(data[0]))
      .catch((err) => console.error(err));
  }, [id]);

  if(!character) return;

  return(
    <div className ="container large">
      <div className = "character_details-container">
        <img
          src = {`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt = "character portrait full size"
        />
        <div className = "character_details">
          <h4>Name</h4>
          <p>{character.name}</p>
          {character.description ? (
            <>
              <h4>Description</h4>
              <p>{character.description}</p>
            </>
          ) : null}
          <div name = "character_series">
          <h4>Series</h4>
            <ul>
              {character.series.items.map((s) => (
                <li key = {Math.random() * 1000}>{s.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
