import React  from "react";
import {render,screen} from "@testing-library/react";
import Home from "./Home"

describe('Home.tsx', () => {
    test("renders component with Hero header", () => {
        render(<Home />)
        const header = screen.getByText(/Franky Cars/gmi)
        expect(header).toBeInTheDocument();
    })
})