import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import CowShow from "../pages/CowShow";
import mockCows from "../MockCows";

describe("<CowShow />", () => {
  it("renders a name", () => {
    render (
        <MemoryRouter initialEntries={["/cowshow/1"]}>
            <Routes>
                <Route path="/cowshow/:id" element= {<CowShow cows={mockCows} />} />
            </Routes>
        </MemoryRouter>
    )
    screen.debug
    screen.logTestingPlaygroundURL()
    const cowName = screen.getByRole('heading', {
      name: /name: ottis/i
    })
    expect(cowName).toHaveTextContent(/name: ottis/i)
  })
})