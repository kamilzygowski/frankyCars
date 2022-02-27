import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { MemoryRouter } from "react-router-dom";

const setBarsIcon = jest.fn((state:boolean) => {return !state})

describe('Sidebar.tsx', () => {
    test("sidebar renders", () => {
        render(
            <MemoryRouter>
                <Sidebar setBarsIcon={setBarsIcon} />
            </MemoryRouter>)
        const sideBarText = screen.getByText(/Home/gi)
        expect(sideBarText).toBeInTheDocument();
    }) 
    test("link in sidebar works properly", async() => {
        render(
            <MemoryRouter>
                <Sidebar setBarsIcon={setBarsIcon} />
            </MemoryRouter>)
        const sidebarLink = screen.getAllByTestId("sidebarLink");
        // First arr of sidebar link is always HOME
        expect(sidebarLink[0]).toBeInTheDocument();
        fireEvent.click(sidebarLink[0], setBarsIcon(false))
        // Second mock func call means after fireEvent and [0] means to get the first return val from calls
        expect(setBarsIcon.mock.calls[1][0]).toBe(true)
    }) 
})