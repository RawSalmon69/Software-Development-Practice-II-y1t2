import '@testing-library/jest-dom'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Banner from '@/components/Banner'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(()=> {
    return { push: jest.fn((destination:string)=>null) }
  })
}));

describe('Banner Event', () => {

  const covers = ['cover.jpg','cover2.jpg','cover3.jpg','cover4.jpg']
  it('Banner responses to click', async() => {
    render(<Banner/>)
    const bannerImg = screen.getByRole("img") as HTMLImageElement
    expect(bannerImg).toBeInTheDocument
    for (let i=0; i<covers.length; i++) {
      await userEvent.click(bannerImg)
      await waitFor(() => {
        expect(bannerImg.src).toContain(covers[(i+1)%4])
      })
    }
  })
})
