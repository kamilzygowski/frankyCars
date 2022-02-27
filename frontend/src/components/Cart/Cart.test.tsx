import React  from "react";
import {render,screen} from "@testing-library/react";
import Cart from "./Cart";
import { randomCar } from "../CarPreview/CarPreview.test";

const updateApp = jest.fn()

describe('Cart.tsx', ()=> {
    test("renders title with correct nr of cart products", () => {
        render(<Cart cartItem={[]} updateApp={updateApp}/>)
        const cartTitleNumber = screen.getByText(/Products in cart \(0\)/gmi)
        expect(cartTitleNumber).toBeInTheDocument();
    })
    test("If cart is not empty, summary info text is displayed", () => {
        render(<Cart cartItem={[randomCar]} updateApp={updateApp}/>)
        const cartItemsInfo = screen.getByText(/Summary:/gmi)
        expect(cartItemsInfo).toBeVisible();
    })
    test("Delete item from cart renders on not empty cartItem", async() => {
        render(<Cart cartItem={[randomCar]} updateApp={updateApp}/>)
        const deleteButton = await screen.findByTestId("deleteFromCart");
        expect(deleteButton).toBeInTheDocument();
    })
})