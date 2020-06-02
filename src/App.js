import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import "./App.css";

// function App() {
class App extends Component {
  constructor() {
    super();

    this.state = {
      family: [],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({family: users}));
  }

  handleChange =(e)  => {
    this.setState({ searchField: e.target.value });
  }

  render() {

    const { family, searchField } = this.state;
    const filteredFamily = family.filter(persone => persone.name.toLowerCase().includes(searchField.toLowerCase()));
    

    return (
      <div className="App">
        
        <h1> D&D characters Rolodex</h1>
        
        <SearchBox
          placeholder='search your class'
          handleChange = {this.handleChange}
        />
        
        <CardList family={filteredFamily} />
        
      </div>
    );
  }
}

export default App;
