import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Page from '@/app/(hospitalinfo)/hospital/page'
import CardPanel from '@/components/CardPanel'
jest.mock('../src/components/CardPanel')

describe('hospital route page', () => {
  it('Page contains Banner and CardPanel', () => {
    render(<Page/>)
    expect(CardPanel).toHaveBeenCalledTimes(1)  
  })
})
