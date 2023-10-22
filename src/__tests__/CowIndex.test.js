import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CowIndex from '../pages/CowIndex'
import mockCows from '../MockCows'

describe('<CowIndex />', () => {
    it('has an image', () => {
      render(
        <BrowserRouter>
          <CowIndex cows={mockCows} />
        </BrowserRouter>
      )
      screen.logTestingPlaygroundURL()
      mockCows.forEach((cow) => {
        const altTxt = screen.getAllByAltText(/profile picture for/i)
        screen.debug(altTxt[0])
        expect(altTxt[0]).toBeInTheDocument()
        })
      const cowImage = screen.getByRole('img', {
        name: /profile picture for Ottis/i })

      expect(cowImage).toHaveAttribute('src', "https://livestockmiddleeast.com/wp-content/uploads/2019/06/KUBITUS-DE-BRAY-455716400-6047-e1561536471567.jpg")
      expect(cowImage).toHaveAttribute('alt', 'profile picture for Ottis')
        })
    })