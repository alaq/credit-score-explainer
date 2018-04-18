import React from 'react'
import enzyme, { shallow } from 'enzyme'
import DerogatoryMarks from './DerogatoryMarks'

describe('DerogatoryMarks', () => {
  let Comp

  beforeEach(() => {
    Comp = shallow(<DerogatoryMarks />)
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
        <li>
          If you haven't already, set up automatic bill pay to make monthly payments more convenient. Autopay could help
          prevent accounts from becoming past due and possibly going into collections.
        </li>
      )
    ).toEqual(true)
  })
})
