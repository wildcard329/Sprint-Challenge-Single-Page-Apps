import React from "react";
import { Link, Switch, Router, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";

function Navigation() {
    return (
        <Router>
            <div>
                <nav className="main-nav">
                    <ul>
                        <li>
                            <Link to="/">WelcomePage</Link>
                        </li>
                        <li>
                            <Link to="/characterlist">characterlist</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/characterlist" component={CharacterList} />
                    <Route exact path="/" component={WelcomePage} />
                </Switch>
            </div>
        </Router>
    )};
export default Navigation;