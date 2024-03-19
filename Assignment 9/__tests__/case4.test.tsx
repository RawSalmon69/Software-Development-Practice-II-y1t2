import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react'
import Page from '@/app/(hospitalinfo)/hospital/[hid]/page'

describe('hospital detail page', () => {
  it('Page contains hospital details', async () => {
    const detailPage = await Page({params: {hid: '651fad5f05c6b313f8dfb1e5'}})
    render(detailPage)
    await waitFor(()=> {
      const hospitalName = screen.queryAllByText(/Chulalongkorn Hospital/i)
      expect(hospitalName.length).toBeGreaterThan(0)
      const hospitalTel = screen.queryAllByText(/026494000/i)
      expect(hospitalTel.length).toBeGreaterThan(0)
    })  
  })
})