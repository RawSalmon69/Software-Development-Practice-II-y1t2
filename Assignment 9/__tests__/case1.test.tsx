import '@testing-library/jest-dom'
import getHospitals from '@/libs/getHospitals'
import HospitalCatalog from '@/components/HospitalCatalog'
import { screen, render, waitFor } from '@testing-library/react'

describe('Get Hospitals', () => {
  var hospitalPromise:Promise<Object>
  var hospitalsJsonResult:Object
  beforeEach(async () => {
    hospitalPromise = getHospitals()
    hospitalsJsonResult = await hospitalPromise
  })

  it('getHospitals must return correct results', () => {
    const resultData = hospitalsJsonResult.data
    expect(hospitalsJsonResult.count).toBe(3) 
    expect(resultData).toHaveLength(3)
    const ids = ["651faed405c6b313f8dfb1eb", "651fad5f05c6b313f8dfb1e5", "651fae4b05c6b313f8dfb1e8"]
    expect(ids).toContain(resultData[0].id)  
  })

  it('Hospital Catalog should have correct number of images', async () => {
    const catalog = await HospitalCatalog({hospitalsJson: hospitalsJsonResult})
    render(catalog) 
    
    await waitFor(()=> {
      const hospitalImages = screen.queryAllByRole('img')
      expect(hospitalImages.length).toBe(3)
    })
    
  })
  
  
})
