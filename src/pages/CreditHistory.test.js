import React from 'react'
import enzyme, { shallow } from 'enzyme'
import CreditHistory from './CreditHistory'

describe('Credit History', () => {
  let Comp

  beforeEach(() => {
    Comp = shallow(<CreditHistory />)
  })

  it('renders headers', () => {
    expect(Comp.find('h1').length).toEqual(1)
    expect(Comp.find('CardTitle').length).toEqual(3)
  })

  it('renders speedometer', () => {
    expect(Comp.find('ReactSpeedometer').length).toEqual(2)
  })

  it('renders the correct content', () => {
    expect(Comp.find('ul').contains(<li>Keep your accounts open, even if you are not using them.</li>)).toEqual(true)
  })
})
