import React  from "react";
import {fireEvent, render,screen} from "@testing-library/react";
import CarPreview from "./CarPreview"

export const randomCar =   {
    list_id: '4',
    list_name: 'Warehouse D',
    list_location_lat: '',
    list_location_long: '',
    list_cars_location: 'Suid wing',
    list_cars_vehicles_id: '80',
    list_cars_vehicles_make: 'Lexus',
    list_cars_vehicles_model: 'RX',
    list_cars_vehicles_year_model: '2000',
    list_cars_vehicles_price: '17805.45',
    list_cars_vehicles_licensed: false,
    list_cars_vehicles_date_added: '2018-09-11 00:00:00'
  };
  export const randomWarehouse =   {
    list_id: '4',
    list_name: 'Warehouse D',
    list_location_lat: '1',
    list_location_long: '1',
    list_cars_location: '',
    list_cars_vehicles_id: '',
    list_cars_vehicles_make: '',
    list_cars_vehicles_model: '',
    list_cars_vehicles_year_model: '',
    list_cars_vehicles_price: '',
    list_cars_vehicles_licensed: false,
    list_cars_vehicles_date_added: ''
  };

  const toggleState = jest.fn()

describe('CarPreview.tsx', ()=> {
    test("renders component with correct props displays the details", () => {
        render(<CarPreview toggleState={toggleState} thisCar={randomCar} thisWarehouse={randomCar} cartItem={(arg => arg)}/>)
        const carMake = screen.getByText(/Lexus/gmi)
        expect(carMake).toBeVisible();
    })
    test('on AddToCart button click, the checkIcon displays', async() => {
        render(<CarPreview toggleState={toggleState} thisCar={randomCar} thisWarehouse={randomCar} cartItem={(arg => arg)}/>)
        const addToCart = screen.getByText("Add to cart");
        // Check first if it exists
        expect(addToCart).toBeInTheDocument();
        fireEvent.click(addToCart);
        const checkIconDiv = await screen.findByTestId("itemAddedToCart")
        expect(checkIconDiv).toBeVisible();
    })
})

