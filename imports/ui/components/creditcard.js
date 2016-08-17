import React, { Component } from 'react'
import Payment from 'payment'
import { Row, Col, FormGroup, ControlLabel, Button, Alert } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'

export class CreditCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: null,
      exp_month: null,
      exp_year: null,
      cvc: null,
      token: null,
    }
    this.setCardType = this.setCardType.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetCard = this.resetCard.bind(this)
  }
  resetCard() {
    this.setState({
      number: null,
      exp_month: null,
      exp_year: null,
      cvc: null,
      token: null,
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.resetCard()
    const { refs } = this
    const number = refs.number.value
    const expiration = refs.expiration.split('/')
    const exp_month = parseInt(expiration[0], 10)
    const exp_year = parseInt(expiration[1], 10)
    const cvc = refs.cvc.value
    const card { number, exp_month, exp_year, cvc }
  }
  setCardType(event) {
    const type = Payment.fns.cardType(event.target.value)
    const cards = document.querySelectorAll('[data-brand]')
    cards.forEach.call(cards, (element) => {
      if (element.getAttribute('data-brand') === type) {
        element.classList.add('active')
      } else {
        element.classList.remove('active')
      }
    })
  }
  renderCardList() {
    return (
      <ul className="credit-card-list clearfix">
        <li><i data-brand="visa" className="fa fa-cc-visa"></i></li>
        <li><i data-brand="amex" className="fa fa-cc-amex"></i></li>
        <li><i data-brand="mastercard" className="fa fa-cc-mastercard"></i></li>
        <li><i data-brand="jcb" className="fa fa-cc-jcb"></i></li>
        <li><i data-brand="discover" className="fa fa-cc-discover"></i></li>
        <li><i data-brand="dinersclub" className="fa fa-cc-diners-club"></i></li>
      </ul>
    )
  }
  renderCardForm() {
    return (
      <form onSubmit={ this.handleSubmit } className="CardForm">
        <Row>
          <Col xs={ 12 }>
            <FormGroup>
              <ControlLabel>Card Number</ControlLabel>
              <input
                onKeyUp={ this.setCardType }
                className="form-control"
                type="text"
                ref="number"
                placeholder="Card Number"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={ 6 } sm={ 5 }>
            <FormGroup>
              <ControlLabel>Expiration</ControlLabel>
              <input
                type="text"
                className="form-control text-center"
                ref="expiration"
                placeholder="MM/YYYY"
              />
            </FormGroup>
          </Col>
          <Col xs={ 6 } sm={ 4 } smOffset={ 3 }>
            <FormGroup>
              <ControlLabel>CVC</ControlLabel>
              <input
                type="text"
                className="form-control text-center"
                ref="cvc"
                placeholder="CVC"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button type="submit" bsStyle="success" block>Generate Token</Button>
      </form>
    )
  }
  componentDidMount() {
    const { number, expiration, cvc } = this.refs
    Payment.formatCardNumber(number)
    Payment.formatCardExpiry(expiration)
    Payment.formatCardCVC(cvc)
  }
  render() {
    return (
      <div className="CreditCard">
        { this.renderCardList() }
        { this.renderCardForm() }
      </div>
    )
  }
}

CreditCard.propTypes = {}
