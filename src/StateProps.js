import React, { Component } from 'react'
import Operan from './Operan'

export default class StateProps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      makanan : 'Bakso'
    }
  }

  setNewFood(new_food) {
    this.setState({ makanan: new_food })
  }

  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        <button onClick={() => this.setNewFood('Mie Ayam')}>Ganti Makanan</button>
        <Operan makanan={this.state.makanan}/>
      </div>
    )
  }
}
