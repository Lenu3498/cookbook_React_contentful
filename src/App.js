import React from "react";
import "./App.css";
import { client } from "./client";
import Posts from "./components/Posts";
//import LoadingPizza from './public/loading-pizza.gif';

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
      <div className="App">
        <header>
          <h1>Cookbook</h1>
        </header>
        <main>
          <div>
            <Posts posts={this.state.articles} />
          </div>
        </main>
        <footer>
          <p>© 2021 Cookbook 2.0</p>
        </footer>
      </div>
    );
  }
}

export default App;
