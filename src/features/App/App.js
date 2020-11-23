import React from 'react';
import "../../assets/styles/index.css";

import { 
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useRouteMatch,
  useParams
} from 'react-router-dom';

import './App.css';
import Home from '../Home/Home';
import About from "../About/About";
import Topics from '../Topics/Topics';

function App() {
  return (
    <Router>
        <div className="App">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>
                </nav>
            </header>
            <section>
                <Switch>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </section>
        </div>
    </Router>
  );
}

export default App;
