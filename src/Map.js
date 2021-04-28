import React from 'react'

const makanans = [
  {
    nama: 'Soto',
    harge: 12000
  },
  {
    nama: 'Yamien Goreng',
    harge: 13000
  },
  {
    nama: 'Siomay',
    harge: 10000
  },
  {
    nama: 'Mie Ayam',
    harge: 15000
  },
  {
    nama: 'Bakso',
    harge: 17000
  },
]

const Map = () => {
  return (
    <div>
      <h2>Map</h2>
      <ul>
        {makanans.map((makanan, index) => (
          <li>{index+1}. {makanan.nama} - Rp.{makanan.harge}</li>
        ))}
      </ul>
    </div>
  )
}

export default Map
