import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import Page from '@/app/(hospitalinfo)/hospital/[hid]/page'

describe('hospital id route section page', () => {
  it('Page contains Banner and CardPanel', () => {
    render(<Page params={{hid:'001'}}/>)
    const hospImage = screen.getByRole("img")
    expect(hospImage).toBeInTheDocument 
    expect(screen.getByText(/Chula/i)).toBeInTheDocument 
  })
})
