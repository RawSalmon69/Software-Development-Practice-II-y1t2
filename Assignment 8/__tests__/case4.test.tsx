import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import PromoteCard from '@/components/PromoteCard'

jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation()

jest.spyOn(window, 'addEventListener').mockImplementation()

describe('Window', () => {
  it('window addEventListener is called', () => {
    render(<PromoteCard/>)
    expect(window.addEventListener).toHaveBeenCalledWith("contextmenu", expect.any(Function))
  })
})
