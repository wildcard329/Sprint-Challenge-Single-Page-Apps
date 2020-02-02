import React from "react";


export default function CharacterCard(props) {
  return (
    <div className="card">
        <h2>{props.char.name}</h2>
        <h2>{props.char.gender}</h2>
        <img src={props.char.image} />
    </div>
    
    )
}
