import React from "react";
import Header from "./components/Header.js";


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
