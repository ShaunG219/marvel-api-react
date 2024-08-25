import React, {useState, useEffect} from 'react'

// Import hooks
import {useParams} from "react-router-dom";

// Import utils
import {fetchHero} from "../utils/utils";


export default function HeroDetails() {
  let {id} = useParams();

  const [hero, setHero] = useState();

  useEffect
  return <div>{id}</div>
}
