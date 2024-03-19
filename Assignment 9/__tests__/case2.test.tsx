import '@testing-library/jest-dom'
import getHospital from '@/libs/getHospital'

describe('Get Hospital by ID', () => {
  var hospitalByIdPromise:Promise<Object>
  var hospitalJsonResult:Object
  beforeEach(async () => {
    hospitalByIdPromise = getHospital('651fad5f05c6b313f8dfb1e5')
    hospitalJsonResult = await hospitalByIdPromise
  })

  it('getHospital must return correct result', () => {
    const resultData = hospitalJsonResult.data
    expect(resultData.name).toMatch(/Chulalongkorn Hospital/i) 
  })
})