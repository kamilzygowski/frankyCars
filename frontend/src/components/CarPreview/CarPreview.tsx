import React from 'react'
import { Car } from '../CarList/CarList';
import './CarPreview.scss';
import { Carousel } from 'react-responsive-carousel/lib/js';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarProps {
  thisCar: Car;
  thisWarehouse: Car;
  toggleState: () => void;
}
const CarPreview = (props: CarProps) => {
  const thisCar: Car = props.thisCar;
  const thisWarehouse: Car = props.thisWarehouse;
  return (
    <div className='CarPreview' onClick={() => props.toggleState()}>
      {/* This line below makes clicking on Car info toggles showing this components state as well like the above line
      so those 2 lines neutralize each other on the below component */}
      <div className='details' onClick={() => props.toggleState()}>
        <div className='detailsText'>
          <h1>Car details:</h1>
          <p><span>Make:</span> {thisCar.list_cars_vehicles_make}</p>
          <p><span>Model:</span> {thisCar.list_cars_vehicles_model}</p>
          <p><span>Production year:</span> {thisCar.list_cars_vehicles_year_model}</p>
          <p><span>Price:</span> {thisCar.list_cars_vehicles_price} PLN</p>
          <p><span>Location:</span> {thisCar.list_cars_location}</p>
          <p><span>Warehouse:</span> {thisWarehouse.list_name}</p>
          <p><span>Geographic lat:</span> {thisWarehouse.list_location_lat}</p>
          <p><span>Geographic long:</span> {thisWarehouse.list_location_long}</p>
          <button className='addToCart'>Add to cart</button>
        </div>
        <Carousel autoplay={true} infiniteLoop={true} className='Carousel'>
          <div>
            {/* Here would be something like taking src from props src={thisCar.img} 
              but let's leave it like that*/}
            <img src="https://i.postimg.cc/MG32hP6T/pexels-mike-1007410.jpg" alt="car" />
          </div>
          <div>
            <img src="https://i.postimg.cc/wxV37HjR/pexels-revac-film-s-photography-205337.jpg" alt="car" />
          </div>
          <div>
            <img src="https://i.postimg.cc/VvKFVmNd/pexels-alex-amorales-909907.jpg" alt="car" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
export default CarPreview;