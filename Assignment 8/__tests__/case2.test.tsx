import '@testing-library/jest-dom'
import { render, screen, within, waitFor, fireEvent } from '@testing-library/react'
import VideoPlayer from '@/components/VideoPlayer'

const playStub = jest
  .spyOn(window.HTMLMediaElement.prototype, 'play')
  .mockImplementation()

describe('VideoPlayer', () => {
  it('VideoPlayer plays/pauses based on props', async () => {

    const vdoPath = "../public/vdo/getvaccine.mp4"
    render(<VideoPlayer vdoSrc={vdoPath} isPlaying={true}/>)
    expect(playStub).toHaveBeenCalled()
    playStub.mockRestore
  } //end it
  )
})



