import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'
import Banner from '@/components/Banner'
import Card from '@/components/Card'

jest.mock('../src/components/Banner')
jest.mock('../src/components/Card')

describe('Page', () => {
  it('Page contains Banner and Card', () => {
    render(<Page/>)
    expect(Banner).toHaveBeenCalledTimes(1)
    expect(Card).toHaveBeenCalledTimes(1)
  })
})