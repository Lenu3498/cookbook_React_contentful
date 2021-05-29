import React from "react";
import "./App.css";
import { client } from "./client";
import Posts from "./components/Posts";
import About from "./components/About"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Recipe from "./components/Recipe";


class App extends React.Component {
  state = {
    articles: [],
    loading: true,
  };

  //const [isLoading, setIsloading] = useState(true);

  componentDidMount() {

    client
      .getEntries()
      .then((response) => {
        console.log(response);
        this.setState({
          articles: response.items,
          loading: false,
        });

      })
      .catch(console.error);
  }

  render() {

    return this.state.loading ? (
      <img src={process.env.PUBLIC_URL + '/loading-pizza.gif'} alt='LoadingPizza' style={{margin: "15% 40%"}}  />
    ) : (

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
        <Route path="/:recipeName">
          <Recipe />
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
