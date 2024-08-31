import React from 'react';

import {useState} from "react";

// import components
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import Card from "../components/Card";

const IMAGE_SIZE = "portrait_fantastic";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  let cards;

  if(characters){
    cards = characters.map((character) => (
      <Card 
        name={character.name}
        id ={character.id} 
        key = {character.id} 
        thumbnail = {`${character.thumbnail.path}/${IMAGE_SIZE}.${character.thumbnail.extension}`}
      />
    ));
  }

  return (
    <Container>
      <h1>Discover Marvel Characters</h1>
      <SearchBar setter = {setCharacters}/>
      <Grid>
        {cards ? cards : null}
      </Grid>
    </Container>
  );
}
