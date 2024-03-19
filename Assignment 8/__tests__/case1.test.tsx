import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Page from '@/app/page'
import PromoteCard from '@/components/PromoteCard'

jest.mock('../src/components/PromoteCard')
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(()=> {
    return { push: jest.fn((destination:string)=>null) }
  })
}));

describe('first page', () => {
  it('Page contains PromoteCard', () => {
    render(<Page/>)
    expect(PromoteCard).toHaveBeenCalledTimes(1)  
  })
})
