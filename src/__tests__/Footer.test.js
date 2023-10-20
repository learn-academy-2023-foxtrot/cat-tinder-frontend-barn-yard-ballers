import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
// import userEvent from "@testing-library/user-event"
import Footer from "../components/Footer"

describe("<Footer />", () => {
    it("renders without crashing", () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      )
          const footing = screen.getByText(/footer/i)
          expect(footing).toBeInTheDocument()
    })
})    