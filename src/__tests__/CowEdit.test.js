import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CowEdit from '../pages/CowEdit'
import mockCows from "../MockCows";

describe("<CowEdit />", () => {
    it("renders name", () => {
        render(
            <MemoryRouter initialEntries={["/cowEdit/1"]}>
              <Routes>
                <Route path="/cowedit/:id" element= {<CowEdit cows={mockCows}/>}/>
              </Routes>
            </MemoryRouter>
        )
        
        const cowEdit = screen.getByRole('heading', {
        name: /add a cow/i
        })
        expect(cowEdit).toHaveTextContent(/add a cow/i)
    })
})