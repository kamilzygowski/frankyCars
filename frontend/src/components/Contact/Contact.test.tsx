import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "./Contact"
import { endpointURL } from "../Home/Home";
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { randomWarehouse } from "../CarPreview/CarPreview.test";

const server = setupServer(
    rest.get(endpointURL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([randomWarehouse]))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("Contact.tsx", () => {
    test("Contact not renders information if data is not fetched", () => {
        render(<Contact />)
        expect(screen.queryByText(/Warehouse D/gmi)).not.toBeInTheDocument();
    })
    test("handles API GET failure", () => {
        render(<Contact />)
        server.use(
            rest.get(endpointURL, (req, res, ctx) => {
                return res(ctx.status(404));
            })
        )
    })
})