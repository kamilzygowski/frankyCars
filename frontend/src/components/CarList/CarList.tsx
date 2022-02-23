import React from 'react';
import './CarList.scss';

export interface Car {
  list_id: string;
  list_name: string;
  list_location_lat: string;
  list_location_long: string;
  list_cars_location: string;
  list_cars_vehicles_id: number;
  list_cars_vehicles_make: string;
  list_cars_vehicles_model: string;
  list_cars_vehicles_year_model: number;
  list_cars_vehicles_price: number;
  list_cars_vehicles_licensed: boolean;
  list_cars_vehicles_date_added: Date;
}
export interface CarsList {
  data: Car[];
}

const CarList: React.FC<CarsList> = (props: CarsList) => {
  // Get rid of objects containing only info about Warehouses
  const carsToDisplay: Car[] = props.data.filter((element: any) => {
    return element.list_location_long === ""
  })
  // Then store info about Warehouses to new Array
  // warehousesInfo[0] === info about Warehouse A, warehousesInfo[1] === info about Warehouse B etc.
  const warehousesInfo: Car[] = props.data.filter((element: any) => {
    return element.list_location_long !== ""
  })
  console.log(carsToDisplay)
  console.log(warehousesInfo)
  // Sorting cars ascending by date
  carsToDisplay.sort((a: Car, b: Car) => {
    if (a.list_cars_vehicles_date_added < b.list_cars_vehicles_date_added) {
      return -1;
    }
    if (a.list_cars_vehicles_date_added > b.list_cars_vehicles_date_added) {
      return 1;
    }
    return 0;
  });
  return (
    <div className='CarList'>
      {carsToDisplay.map((element: Car) => {
        return (
          <div className='Car' key={element.list_cars_vehicles_id}>
            <p>{element.list_cars_vehicles_make} - {element.list_cars_vehicles_model}</p>
            <p>{element.list_cars_vehicles_year_model}</p>
            <p>{element.list_cars_vehicles_price} PLN</p>
            <p>{element.list_cars_vehicles_id}</p>
            <p>{element.list_cars_vehicles_date_added}</p>
          </div>
        )
      })}

    </div>
  )
}
export default CarList