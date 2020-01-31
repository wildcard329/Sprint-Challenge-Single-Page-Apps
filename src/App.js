import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import { WelcomePage, CharacterList, Navigation } from "./components";

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
