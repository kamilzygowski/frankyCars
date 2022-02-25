import './Home.scss'
import React from 'react';
import axios from 'axios';
import CarList, { CarsList, Car } from '../CarList/CarList';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';


const endpointURL: string = 'http://localhost:8000/cars';

class Home extends React.Component {
    state: any = {
        cars: [],
        shopCartArr: []
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
            <div className="Home">
                {console.log(this.state.shopCartArr)}
                <Navbar shopCart={this.state.shopCartArr} />
                <Hero header="Franky Cars" />
                <CarList data={this.state.cars} shopCart={this.state.shopCartArr} />
            </div>
        );
    }
}
export default Home;