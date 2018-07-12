import React, { Component } from 'react';
import './App.css';
import Table from './components/table/table';
import Service from './services/service';

class App extends Component {

  constructor() {
    super();
    this.service = new Service();

    this.state = {planets: [], currentColumn: ''};

    this.service.getPlanets()
      .then(response => {
        this.setState({planets: response.data.results});
      });
  }

  sort(column) {

    const data = [...this.state.planets];

    let dataOrder = [];

    if(this.state.currentColumn === column) {
        dataOrder = data.reverse();
    } else {
        dataOrder = data.sort((v1, v2) => {
          if(column === 'name' || column === 'climate' || column === 'terrain') {
            return v1[column].localeCompare(v2[column]);
          } else {
            return v1[column] - v2[column]
          }
        });
    }
    
    this.setState({planets: dataOrder, currentColumn: column});

  }

  render() {
    return (
      <div className="App">
        <Table planets={this.state.planets} click={(event) => this.sort.bind(this, event)}/>
      </div>
    );
  }
}

export default App;
