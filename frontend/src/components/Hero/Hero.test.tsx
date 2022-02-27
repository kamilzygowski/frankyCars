import React  from "react";
import {render,screen} from "@testing-library/react";
import Hero from "./Hero"

describe('Hero.tsx', () => {
    test("renders component with passed props", () => {
        render(<Hero header={'Hiho passing props works'}/>)
        const header = screen.getByText(/Hiho passing props works/gmi)
        expect(header).toBeInTheDocument();
    })
})