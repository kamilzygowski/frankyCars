import './Home.scss'
import React from 'react';
import axios from 'axios';
import CarList, { CarsList, Car } from '../CarList/CarList';
import Hero from '../Hero/Hero';


export const endpointURL: string = 'http://localhost:8000/cars';

class Home extends React.Component<() => void> {
    state = {
        cars: [],
    }
    componentDidMount(): void {
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
                <Hero header="Franky Cars" />
                <CarList data={this.state.cars} cartItem={this.props.children} />
            </div>
        );
    }
}
export default Home;