import React, { useState } from 'react';
import CarPreview from '../CarPreview/CarPreview';
import './CarList.scss';

export interface Car {
  list_id: string;
  list_name: string;
  list_location_lat: string;
  list_location_long: string;
  list_cars_location: string;
  list_cars_vehicles_id: string;
  list_cars_vehicles_make: string;
  list_cars_vehicles_model: string;
  list_cars_vehicles_year_model: string;
  list_cars_vehicles_price: string;
  list_cars_vehicles_licensed: boolean;
  list_cars_vehicles_date_added: string;
}
export interface CarsList {
  data: Car[];
  length?: number;
  cars?: [];
}

interface CarListProps {
  data: Car[];
  // "any" below is necessary cause Home Component treat this props as ReactNode 
  cartItem: any;
}

const CarList: React.FC<CarListProps> = ({data, cartItem}): JSX.Element => {
  const carsToDisplay: Car[] = data.filter((element: Car) => {
    return element.list_location_long === ""
  })
  // Store info about Warehouses to new Array
  // warehousesInfo[0] === info about Warehouse A, warehousesInfo[1] === info about Warehouse B etc.
  const warehousesInfo: Car[] = data.filter((element: Car) => {
    return element.list_location_long !== ""
  })

  const [renderComponent, setRenderComponent] = useState<boolean>(false);
  const [selectedCar, setCar] = useState<Car>(carsToDisplay[1]);
  const [warehouse, setWarehouse] = useState<Car>(carsToDisplay[1]);
  let [isCarLicensed, setCarLicense] = useState<boolean>(false);
  // Get rid of objects containing only info about Warehouses
  // Sorting cars ascending by date
  carsToDisplay.sort((a: Car, b: Car): number => {
    if (a.list_cars_vehicles_date_added < b.list_cars_vehicles_date_added) return -1;
    if (a.list_cars_vehicles_date_added > b.list_cars_vehicles_date_added) return 1;
    return 0;
  });
  // Toggle state of CarPreview component 
  const toggleState = (state?: boolean): void => {
    state ? setRenderComponent(state) : setRenderComponent((prevState: boolean) => !prevState);
  }
  const compareWarehouses = (car: Car, warehousesArr: Car[]): Car => {
    let result: Car = car;
    warehousesArr.map((elem: Car): Car => {
      if (car.list_name === elem.list_name) result = elem;
      return result;
    })
    return result;
  }
  const randomImgArray: string[] = [
    'https://i.postimg.cc/JhP006sj/pexels-alex-amorales-909907-1.webp',
    'https://i.postimg.cc/G9whV6fn/pexels-arina-naomi-jilly-8020727-1.webp',
    'https://i.postimg.cc/4dyd96cq/pexels-erik-mclean-4062395-1.webp',
    'https://i.postimg.cc/s2V1VdgV/pexels-erik-mclean-7980878-1.webp',
    'https://i.postimg.cc/63PQL8L3/pexels-garvin-st-villier-5581195-1.webp',
    'https://i.postimg.cc/WpQGszLT/pexels-mike-1007410-1.webp',
    'https://i.postimg.cc/nVsK87W3/pexels-mike-170811-1.webp',
    'https://i.postimg.cc/2yBSHC2x/pexels-mike-446389-1.webp',
    'https://i.postimg.cc/BQHxb34D/pexels-murat-soyluoglu-1209774-1.webp',
    'https://i.postimg.cc/Sx4czPxP/pexels-revac-film-s-photography-205337.webp',
  ]
  return (

    <div className='CarList'>
      {
        // Passing to CarPreview 3 Propr: Boolean State of CarPreview (so thic component can close itself), Selected car info and Func which adds thisCar to CartItemArray
        renderComponent && isCarLicensed.toString() === "True" ? <CarPreview toggleState={toggleState} thisCar={selectedCar} cartItem={cartItem}
          thisWarehouse={warehouse}></CarPreview> : null
      }
      {carsToDisplay.map((element: Car): JSX.Element => {
        return (
          <div data-testid="carWindow" className='Car' key={element.list_cars_vehicles_id} onClick={() => {
            setCarLicense(element.list_cars_vehicles_licensed);
            setCar(element);
            setWarehouse(compareWarehouses(element, warehousesInfo))
            toggleState(true);
          }}>
            <p className='license'>Licensed: {element.list_cars_vehicles_licensed}</p>
            <img src={randomImgArray[(carsToDisplay.indexOf(element) + 1) % 10]} alt="car preview" />
            <p className='model'>{element.list_cars_vehicles_make} {element.list_cars_vehicles_model}</p>
            <p className='year'>{element.list_cars_vehicles_year_model}</p>
            <p className='price'>{element.list_cars_vehicles_price}<span> PLN</span></p>
          </div>
        )
      })}
    </div>
  )
}
export default CarList
