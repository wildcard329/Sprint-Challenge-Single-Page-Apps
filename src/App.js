import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
  return (
    <main>
      <Route path='/components/Header'>
        <Header />
      </Route>
      <Route path='/components/CharacterList'>
        <CharacterList />
      </Route>
      <Route path='/components/WelcomePage'>
        <WelcomePage />
      </Route>
    </main>
  );
}
