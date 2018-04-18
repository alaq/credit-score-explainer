import React from 'react'
import enzyme, { shallow } from 'enzyme'
import HardInquiries from './HardInquiries'

describe('Hard Inquiries', () => {
  let Inq

  beforeEach(() => {
    Inq = shallow(<HardInquiries />)
  })

  it('renders two headers', () => {
    expect(Inq.find('h1').length).toEqual(1)
  })

  it('renders the correct content', () => {
    expect(
      Inq.find('ul').contains(
        <li>
          Hard inquiries from things like credit applications can stay on your report for up to 2 years, but their
          effects tend to fade over time.
        </li>
      )
    ).toEqual(true)
  })
})
