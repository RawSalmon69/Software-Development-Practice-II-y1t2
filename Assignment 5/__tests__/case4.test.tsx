import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DateReserve from '@/components/DateReserve'
import { userEvent } from "@testing-library/user-event";

describe('DateReserve', () => {
  it('DateReserve contains DatePicker', async() => {
    render(<DateReserve/>)
    
    const gadgetBtn = screen.getByRole('button')
    expect(gadgetBtn).toBeInTheDocument
    await userEvent.click(gadgetBtn); 
    
    expect(
      await screen.findByRole("dialog")
    ).toBeInTheDocument();

    const pickerClassList = (await screen.findByRole("dialog")).classList
    const classObjStr = JSON.stringify(pickerClassList)
    expect(classObjStr).toMatch(/MuiPickersPopper-root/i)
  })
})

