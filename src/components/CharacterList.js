import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log('flag',response.data)
          setData(response.data.results)
        })
        .catch(error => {
          console.log('flag',error)
        })
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  
  return (
    <section className="character-list">
      {data.map(char => (
        <CharacterCard key={char} char={char} />
      ))}
    </section>
  )
  }

