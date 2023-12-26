import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Login() {
    const [changeInput, setChangeInput] = useState()
    const navigate = useNavigate()

    const changeInp = (e) => {
        const resulr = e.target.value
        setChangeInput(resulr)

    }

    const addCarsTable = () => {
        if (changeInput === "1234") {
            navigate("/carstable")
        } else {
            alert("error")
        }
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className='text-center'>Login paroli 1234</h1>
                    <div className='login'>
                        <form>
                            {/* <input type="number" placeholder='Number' className='form-control w-50' /> */}
                            <input type="password" placeholder='Password' onChange={changeInp} className='form-control w-50' />
                            <button onClick={addCarsTable} className='btn btn-primary'>Cars Table</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
