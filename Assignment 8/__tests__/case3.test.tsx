import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import PromoteCard from '@/components/PromoteCard'

const playStub = jest
  .spyOn(window.HTMLMediaElement.prototype, 'play')
  .mockImplementation()

const pauseStub = jest
  .spyOn(window.HTMLMediaElement.prototype, 'pause')
  .mockImplementation()

describe('PromoteCard', () => {
  it('PromoteCard contains play/pause button', async () => {
    render(<PromoteCard/>)
    expect(playStub).toHaveBeenCalled()

    const playpauseBtn = screen.getByRole("button")
    expect(playpauseBtn).toBeInTheDocument 

    const playText = playpauseBtn.innerHTML
    expect(playText).toMatch(/Pause/i)
    if(playText.match(/Pause/i))
    {
      await userEvent.click(playpauseBtn)
      await waitFor(() => {
        expect(pauseStub).toHaveBeenCalled()
        expect(playpauseBtn.innerHTML).toMatch(/Play/i)
      })
    }
  })
})
