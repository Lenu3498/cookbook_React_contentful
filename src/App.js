import React from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts'


class App extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    client.getEntries()
    .then((response) => {
      console.log(response)
      this.setState({
        articles: response.items
      })
    })
    .catch(console.error)
  }

  render() {
    return (
      <div className="App">

          <header>
              <span>Cookbook</span>
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
