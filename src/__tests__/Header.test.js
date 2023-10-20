import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
        // screen.logTestingPlaygroundURL()
        const heading = screen.getByText(/header/i)
        expect(heading).toBeInTheDocument()
  })

  it("renders a logo with a src and alt", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const logo = screen.getByRole("img")
  expect(logo).toHaveAttribute("src", "cows.webp")
  expect(logo).toHaveAttribute("alt", "Cow Tinder logo with outline of cow")
  })

  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Meet the Cows"))
  expect(screen.getByText("Meet the Cows")).toBeInTheDocument()
  userEvent.click(screen.getByText("Add a New Cow"))
  expect(screen.getByText("Add a New Cow")).toBeInTheDocument()
  userEvent.click(screen.getByText("Adopt a Cow!"))
  expect(screen.getByText("Adopt a Cow!")).toBeInTheDocument()
  })
})