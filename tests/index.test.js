import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("Testing Navigation Display", () => {
    it("renders navigation screen", async () => {
        render(<Home />);
        // check if all components are rendered
        let rooms = screen.getAllByText(/ROOMS/i)[0];
        let furniture = screen.getAllByText(/FURNITURE/i)[0];
        let lighning_and_decor = screen.getAllByText(/LIGTHNING & DECOR/i)[0];
        let kitchen = screen.getAllByText(/KITCHEN/i)[0];
        let bath_and_body = screen.getAllByText(/BATH & BODY/i)[0];

        expect(rooms).toBeInTheDocument();
        expect(furniture).toBeInTheDocument();
        expect(lighning_and_decor).toBeInTheDocument();
        expect(kitchen).toBeInTheDocument();
        expect(bath_and_body).toBeInTheDocument();

        fireEvent.click(lighning_and_decor);
        await waitFor(() => {
            let lightning = screen.getAllByText(/LIGHTNING/i)[0]
            let decor = screen.getAllByText(/DECOR/i)[0]
            let plant = screen.getAllByText(/PLANT/i)[0]
            expect(lightning).toBeInTheDocument();
            expect(decor).toBeInTheDocument();
            expect(plant).toBeInTheDocument();
        });    
    });
});


