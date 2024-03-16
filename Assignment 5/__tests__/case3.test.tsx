import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TopMenu from '@/components/TopMenu'
import BookingPage from '@/app/booking/page'

describe('TopMenu', () => {
  it('TopMenu contains image and link', () => {
    render(<TopMenu/>)
    const logos = screen.queryAllByRole("img")
    expect(logos).toHaveLength(1)
    const links = screen.queryAllByRole("link")
    expect(links).toHaveLength(1)
    if(links.length==1) {
      const linkToBooking = links[0] as HTMLLinkElement
      expect(linkToBooking.href).toContain('/booking')
    }
  })
})

describe('Booking Page', () => {
  it('Booking Page Exist', () => {
    const title = "Vaccine Booking"
    render(<BookingPage/>)
    const titleText = screen.getByText(new RegExp(title, "i"))
    expect(titleText).toBeInTheDocument
  })
})
