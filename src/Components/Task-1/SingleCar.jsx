import React, { useState } from 'react'
import "./style.scss"
export default function SingleCar() {
  const [cars] = useState([
    { id: 1, name: "Gentra", price: "$20000", color: "black", year: "2023", position: "3", },
    { id: 2, name: "Cobolt", price: "$10000", color: "white", year: "2020", position: "1", },
    { id: 3, name: "Monza", price: "$15000", color: "black", year: "2023", position: "3", },
  ])

  const url = window.location.href.split("/");
  let index = Number(url[4])

  return (
    <div className='body '>
      <div className="container">
        <h1 className='text-center bg-info'>Welcome</h1>
        <div className="box">
          <div>
            <h1>Name: <span>{cars[index].name}</span></h1>
            <h1>Narxi: <span>{cars[index].price}</span></h1>
            <h1>Rangi: <span>{cars[index].color}</span></h1>
            <h1>Yili: <span>{cars[index].year}</span></h1>
            <h1>Pazitsiyasi: <span>{cars[index].position}</span></h1>
          </div>
        </div>
      </div>
    </div>
  )
}
