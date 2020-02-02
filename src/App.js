import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm";
import LocationsList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodeList.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/'>
        <WelcomePage />
      </Route>
      <Route path="/characters">
        <CharacterList />
      </Route>
      <Route path="/search">
        <SearchForm />
      </Route>
      <Route path="/location">
        <LocationsList />
      </Route>
      <Route path="/episode">
        <EpisodeList />
      </Route>
    </div>
  );
}
