import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default function CarsTable() {
  const [data] = useState([
    { id: 1, name: "Gentra", price: "$20000", color: "black", year: "2023", position: "3", },
    { id: 2, name: "Cobolt", price: "$10000", color: "white", year: "2020", position: "1", },
    { id: 3, name: "Monza", price: "$15000", color: "black", year: "2023", position: "3", },
  ])
  const [cars, setCars] = useState(data)

  const [car, setCar] = useState([
    { id: "", name: "", price: "", color: "", year: "", position: "", },
  ])

  const handleFilter =(e)=> {
    const result = e.target.value
    const filtered = data.filter(item => {
      return item.name.toLowerCase().includes(result.toLowerCase());
    })
    setCars(filtered)
  }

  const remove = (index) => {
    const newRemove = [...cars]
    newRemove.splice(index, 1)
    setCars(newRemove)
  }

  const changeFirstname = (e) => {
    const result = e.target.value
    const filtered = car.filter(item => item.name = result)
    setCar(filtered)
  }

  const changePrice = (e) => {
    const result = e.target.value
    const filtered = car.filter(item => item.price = result)
    setCar(filtered)
  }

  const changeColor = (e) => {
    const result = e.target.value
    const filtered = car.filter(item => item.color = result)
    setCar(filtered)
  }
  const changeYear = (e) => {
    const result = e.target.value
    const filtered = car.filter(item => item.year = result)
    setCar(filtered)
  }

  const changePosition = (e) => {
    const result = e.target.value
    const filtered = car.filter(item => item.position = result)
    setCar(filtered)
  }

  const addCar =()=> {
    const result = [...cars, ...car]
    setCars([...result])
  }


  return (
    <div className='container-fluat'>
      <h1 className='text-center my-5'>Cars Table</h1>
      <div className="row">
        <div className="col-10 offset-1">
          <input type="text" placeholder='Search' onChange={handleFilter} className='form-control mb-3 w-25' />

          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>R/N</th>
                <th>Name</th>
                <th>Price</th>
                <th>color</th>
                <th>Year</th>
                <th>Position</th>
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                cars.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.color}</td>
                      <td>{item.year}</td>
                      <td>{item.position}</td>
                      <td><Link to={`/singlecar/${index}`} className='btn btn-info'>open</Link></td>
                      <td><button className='btn btn-danger' onClick={(() => remove(index))}>Delete</button></td>
                    </tr>
                  )
                })
              }

              <tr>
                <td></td>
                <td><input onChange={changeFirstname} className='form-control w-100' type="text" placeholder='Name' /></td>
                <td><input onChange={changePrice} className='form-control w-100' type="text" placeholder='Price' /></td>
                <td><input onChange={changeColor} className='form-control w-100' type="text" placeholder='Color' /></td>
                <td><input onChange={changeYear} className='form-control w-100' type="text" placeholder='Year' /></td>
                <td><input onChange={changePosition} className='form-control w-100' type="text" placeholder='Position' /></td>
                <td><button className='btn btn-info' onClick={addCar}>AddCar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

