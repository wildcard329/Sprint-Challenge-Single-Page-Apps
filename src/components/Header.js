import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div><Link to="/">homepage</Link></div>
      <div><Link to="/characters">characters</Link></div>
      <div><Link to="/search">search for character</Link></div>
      <div><Link to="/location">location</Link></div>
      <div><Link to="/episode">episodes</Link></div>
    </header>
  );
}

//put links in header; header is always imported into the app, will always display, and the links will remain accessible
// Link is the html equivilant of using an A tage with an Href