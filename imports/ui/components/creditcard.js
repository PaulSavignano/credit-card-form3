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
  render() {
    return (
      <div className="CreditCard">
        { this.renderCardList() }
      </div>
    )
  }
}

CreditCard.propTypes = {}
