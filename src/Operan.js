import React, { Component } from 'react'

export default class Operan extends Component {
  render() {
    return (
      <div>
        <h2>Makana yg diterima dari state dan diterima oleh props ini : {this.props.makanan}</h2>
        <button onClick={() => this.props.setNewFood('Mie Ayam')}>Ganti Makanan</button>
      </div>
    )
  }
}
