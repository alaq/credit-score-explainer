import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Utilization from './Utilization'

describe('Utilization', () => {
  let Comp

  beforeEach(() => {
    Comp = shallow(<Utilization />)
  })

  it('renders header', () => {
    expect(Comp.find('h1').length).toEqual(1)
  })

  it('renders speedometer', () => {
    expect(Comp.find('ReactSpeedometer').length).toEqual(1)
  })

  it('renders the correct content', () => {
    expect(
      Comp.find('ul').contains(<li>Using less than 30% of your credit limit is generally recommended.</li>)
    ).toEqual(true)
  })
})
