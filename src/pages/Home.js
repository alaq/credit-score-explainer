import React, { Component } from 'react'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Container, Row, Col } from 'reactstrap'
import { TopCard, Table, CreditEvents, ScoreHeader } from '../Components'

// import mock data
import mockImpacts from '../data/impacts.json'
import mockAccounts from '../data/accounts.json'
import mockEvents from '../data/events.json'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      impacts: [],
      accounts: [],
      events: [],
      graph: {}
    }
  }

  componentDidMount() {
    var mock = new MockAdapter(axios)
    mock.onGet('api/user/impacts').reply(200, mockImpacts)
    mock.onGet('api/user/accounts').reply(200, mockAccounts)
    mock.onGet('api/user/events').reply(200, mockEvents)

    axios.get('api/user/impacts').then(response => {
      this.setState(response.data)
    })
    axios.get('api/user/accounts').then(response => {
      this.setState(response.data)
    })
    axios.get('api/user/events').then(response => {
      this.setState(response.data)
    })
  }

  render() {
    return (
      <div className="my-3 my-md-5">
        <Container>
          <div className="page-header">
            <h1 className="page-title">
              Your FICO score is <strong>725</strong>.
            </h1>
          </div>

          <ScoreHeader />
          <div className="page-header">
            <h1 className="page-title">Factors that impact your credit score</h1>
          </div>
          <Row className="row-cards">
            {this.state.impacts &&
              this.state.impacts.map((impact, i) => {
                return (
                  <TopCard
                    key={`topcard-${i}`}
                    value={impact.value}
                    label={impact.name}
                    positive={impact.isPositive}
                    description={impact.description}
                    shortName={impact.shortName}
                  />
                )
              })}
          </Row>
          <Row className="row-cards row-deck">
            <Col lg="6">
              <CreditEvents />
            </Col>
            <Col lg="6">
              <Table data={this.state.accounts} title={'Current Accounts'} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home
