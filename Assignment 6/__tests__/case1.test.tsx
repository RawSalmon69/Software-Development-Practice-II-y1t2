import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import CardPanel from '@/components/CardPanel'
import Page from '@/app/page'
import Banner from '@/components/Banner'

jest.mock('../src/components/CardPanel')
jest.mock('../src/components/Banner')

describe('Page', () => {
  it('Page contains Banner and CardPanel', () => {
    render(<Page/>)
    expect(Banner).toHaveBeenCalledTimes(1)
    expect(CardPanel).toHaveBeenCalledTimes(1)  
  })
})
