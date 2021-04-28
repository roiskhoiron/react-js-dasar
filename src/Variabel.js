import React from 'react'

/*
  const harga = 200
  const harga = 300 // Const not-redeclare
  harga = 0 // Const tidak dapat di ubah
*/


/* var harga = 300
if (true) {
  // var harga = 200 // var is redeclare
  harga = 100
} */


let harga = 900
if (true) {
  // let harga = 300 // let tidak mendukung redeclare
  harga = 400 // lebih konsisten dengan block scope
}

const Variabel = () => {
  return (
    <div>
      <h2>Belajar Variabel</h2>
      <ul>
        <li>Const</li>
        <li>Let</li>
        <li>Var</li>
      </ul>

      <h2>Harga :{harga}</h2>

    </div>
  )
}

export default Variabel
