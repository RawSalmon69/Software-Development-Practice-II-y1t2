import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import Page from '@/app/(hospitalinfo)/hospital/page'
import HospitalCatalog from '@/components/HospitalCatalog'

jest.mock('../src/components/HospitalCatalog')

describe('hospital page', () => {
  it('Page contains HospitalCatalog', async () => {
    const page = await(Page())
    render(page)
    await waitFor(()=>{
      expect(HospitalCatalog).toHaveBeenCalledTimes(1) 
    }) 
  })
})
