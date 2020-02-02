import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm";

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
    </div>
  );
}
