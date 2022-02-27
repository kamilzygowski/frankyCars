import React  from "react";
import {fireEvent, render,screen} from "@testing-library/react";
import CarList from "./CarList"
import { randomCar } from "../CarPreview/CarPreview.test";

describe('CarList.tsx', () => {
    test("car object renders if data is not empty array", () => {
        render(<CarList data={[randomCar]} cartItem={[]} />)
        const randomMappingText = screen.getByText(/PLN/gmi);
        expect(randomMappingText).toBeInTheDocument();
    })
    test('Car window on click displays this car info', ()=>{
        const cartItem = jest.fn(arg => {return [arg]});
        render(<CarList data={[randomCar]} cartItem={[]} />)
        const carWindow = screen.getByTestId("carWindow")
        fireEvent.click(carWindow);
        expect(cartItem(randomCar)).toStrictEqual([randomCar])
    })
})


