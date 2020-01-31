import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <main>
      <Header />
      <Route>
        <Navigation />
        <Route path="/welcomepage" component={WelcomePage} />
        <Route path="/characterlist" component={CharacterList} />
      </Route>
    </main>
  );
}
