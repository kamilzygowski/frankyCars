import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar"
import { MemoryRouter } from "react-router-dom";

const setBarsIcon = jest.fn();

describe('Navbar.tsx', () => {
    test("Navbar renders properly", () => {
        render(
            <MemoryRouter>
                <Navbar cartItem={[]} setBarsIcon={setBarsIcon} barsIcon={false} />
            </ MemoryRouter>)
    })
    test("renders bars on barsIcon true", async () => {
        render(<MemoryRouter>
            <Navbar cartItem={[]} setBarsIcon={setBarsIcon} barsIcon={true} />
        </ MemoryRouter>)
        const bars = await screen.findByTestId("bars");
        expect(bars).toBeVisible();
    })
    test("Not renders bars on barsIcon false", () => {
        render(<MemoryRouter>
            <Navbar cartItem={[]} setBarsIcon={setBarsIcon} barsIcon={false} />
        </ MemoryRouter>)
        expect(screen.queryByTestId("bars")).not.toBeInTheDocument();
    })
})