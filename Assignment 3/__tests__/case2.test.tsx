import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Banner from '@/components/Banner'

describe('Banner', () => {
  it('Banner contains image and text', () => {
    render(<Banner/>)
    const bannerImages = screen.queryAllByRole("img")
    const bannerText = screen.getByText("Vaccine Service Center")
    expect(bannerImages).toHaveLength(1)
    expect(bannerText).toBeInTheDocument
  })
})
