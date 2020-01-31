import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios.get('"https://rickandmortyapi.com/api/character/"')
        .then(response => {
          console.log('flag',response.data)
          setChar(response.data)
        })
        .catch(error => {
          console.log('flag',error)
        })
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (<></>
    // <section className="character-list">
    //   <div>{char.map(c => {
    //     return (
    //       <div>char={c}</div>
    //       <div>key={c.id}</div>
        
    //   )}</div>
    // </section>
  );
}
