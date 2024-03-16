import '@testing-library/jest-dom'
import { render, screen, within, waitFor, fireEvent } from '@testing-library/react'
import CardPanel from '@/components/CardPanel'

describe('CardPanel', () => {
  it('CardPanel contains links to correct destination', async () => {
    render(<CardPanel/>)
    const links = screen.queryAllByRole("link")
    expect(links).toHaveLength(3)

    links.forEach((linkElement: HTMLElement) => {
      // child of link contains image and correct text
      const linkDestination = linkElement.getAttribute('href')
      expect(linkDestination).toMatch(/hospital/i)
      const cardImage = within(linkElement).getByRole("img")
      expect(cardImage).toBeInTheDocument
      
      if(linkDestination?.match(/001/i)) {
        expect(within(linkElement).getByText(/Chula/i)).toBeInTheDocument
      }
      else if(linkDestination?.match(/002/i)) {
        expect(within(linkElement).getByText(/Rajavithi/i)).toBeInTheDocument
      }
      else if(linkDestination?.match(/003/i)) {
        expect(within(linkElement).getByText(/Thammasat/i)).toBeInTheDocument
      }
    })
  } //end it
  )
})



