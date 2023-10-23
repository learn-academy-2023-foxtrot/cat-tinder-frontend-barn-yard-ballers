import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CowNew from "../pages/CowNew"

describe("<CowNew />", () => {
    it("renders a heading on the CowNew page", () => {
        render(
          <BrowserRouter>
            <CowNew />
          </BrowserRouter>
        )
        const cowAdd = screen.getByRole('heading', {
            name: /add a cow/i
          })
        expect(cowAdd).toHaveTextContent(/add a cow/i)
    })    
})
