import React from 'react'
import enzyme, { shallow } from 'enzyme'
import NumberOfAccounts from './NumberOfAccounts'

describe('Missed Payments', () => {
  let Comp

  beforeEach(() => {
    Comp = shallow(<NumberOfAccounts />)
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
        <li>Lenders typically like to see that you've used a variety of accounts responsibly.</li>
      )
    ).toEqual(true)
  })
})
