import React, { Component } from 'react';
import axios from 'axios';
import CarList, { CarsList, Car } from '../CarList/CarList';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import './App.scss';

const endpointURL: string = 'http://localhost:8000/cars';

class App extends Component {
  state: any = {
    cars: [],
  }
  componentDidMount() {
    // GET all the data from server
    axios.get(endpointURL)
      .then((result: CarsList) => {
        const data: Car[] = result.data;
        this.setState({ cars: data })
      })
      .catch((err: Error) => console.error(err))
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero header="Franky Cars" />
        <CarList data={this.state.cars} />
      </div>
    );
  }
}
export default App;