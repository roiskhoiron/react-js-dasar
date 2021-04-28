import React, { Component } from 'react'

export default class Operan extends Component {
  render() {
    const { makanan, setNewFood } = this.props

    return (        
      <div>
        <h2>Makana yg diterima dari state dan diterima oleh props ini : {makanan}</h2>
        <button onClick={() => setNewFood('Mie Ayam')}>Ganti Makanan</button>
      </div>
    )
  }
}
