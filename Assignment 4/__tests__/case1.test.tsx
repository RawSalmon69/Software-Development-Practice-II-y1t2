import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'
import RootLayout from '@/app/layout'
import Banner from '@/components/Banner'
import TopMenu from '@/components/TopMenu'
import Card from '@/components/Card'

jest.mock('../src/components/Banner')
jest.mock('../src/components/Card')
jest.mock('../src/components/TopMenu')

describe('Layout', () => {
  it('Layout contains TopMenu, Banner, and 3 Cards', () => {
    render(<RootLayout children={<Page/>}/>)
    expect(TopMenu).toHaveBeenCalledTimes(1)
    expect(Banner).toHaveBeenCalledTimes(1)
    expect(Card).toHaveBeenCalledTimes(3)
  })
})
