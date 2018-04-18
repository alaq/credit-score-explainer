import React from 'react'
import enzyme, { shallow } from 'enzyme'
import MissedPayments from './MissedPayments'

describe('Missed Payements', () => {
  let Comp

  beforeEach(() => {
    Comp = shallow(<MissedPayments />)
  })

  it('renders header', () => {
    expect(Comp.find('h1').length).toEqual(1)
  })

  it('renders speedometer', () => {
    expect(Comp.find('ReactSpeedometer').length).toEqual(1)
  })

  it('renders the correct content', () => {
    expect(
      Comp.find('ul').contains(
        <li>A 100% on-time payment history is a good sign for lenders that you can reliably make payments.</li>
      )
    ).toEqual(true)
  })
})
