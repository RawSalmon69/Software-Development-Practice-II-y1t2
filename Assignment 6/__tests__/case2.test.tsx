import '@testing-library/jest-dom'
import { render, screen, within, waitFor, fireEvent } from '@testing-library/react'
import CardPanel from '@/components/CardPanel'

describe('CardPanel', () => {
  it('CardPanel support ratings', async () => {
    render(<CardPanel/>)

    const chulaRating = screen.getByTestId("Chulalongkorn Hospital Rating")
    const rajavithiRating = screen.getByTestId("Rajavithi Hospital Rating")
    const thammasatRating = screen.getByTestId("Thammasat University Hospital Rating")

    expect(chulaRating).toBeInTheDocument
    expect(rajavithiRating).toBeInTheDocument
    expect(thammasatRating).toBeInTheDocument

    const chulaFour = within(chulaRating).getByRole('radio', {name: "4 Stars"}) as HTMLElement
    expect(chulaFour).toBeInTheDocument
    fireEvent.click(chulaFour)
    await waitFor(() => {
      const chulaDisplay = screen.getByTestId("Chulalongkorn Hospital")
      expect(chulaDisplay).toBeInTheDocument
      expect(chulaDisplay.innerHTML).toMatch(/4/i)
    })

    const rajavithiThree = within(rajavithiRating).getByRole('radio', {name: "3 Stars"}) as HTMLElement
    expect(rajavithiThree).toBeInTheDocument
    fireEvent.click(rajavithiThree)
    await waitFor(() => {
      const rajavithiDisplay = screen.getByTestId("Rajavithi Hospital")
      expect(rajavithiDisplay).toBeInTheDocument
      expect(rajavithiDisplay.innerHTML).toMatch(/3/i)
      expect(rajavithiThree).toBeChecked()
    })

    const rajavithiDisplay = screen.getByTestId("Rajavithi Hospital")
    expect(rajavithiDisplay).toBeInTheDocument
    fireEvent.click(rajavithiDisplay)
    await waitFor(() => {
      const rajavithiDisplay = screen.queryAllByTestId("Rajavithi Hospital")
      expect(rajavithiDisplay).toHaveLength(0)
    })

  } //end it
  )
})



