import React from "react";
import "./App.css";
import { client } from "./client";
import Posts from "./components/Posts";
import About from "./components/About"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        this.setState({
          articles: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <Router>
      <div className="App">
        <header>
          <h1>Cookbook</h1>
        </header>
        <main>
        <Switch>
        <Route exact path="/">
          <div>
            <Posts posts={this.state.articles} />
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        </Switch>
        </main>
        <footer>
          <p>© 2021 Cookbook 2.0</p>
        </footer>
      </div>
      </Router>
    );
  }
}

export default App;
