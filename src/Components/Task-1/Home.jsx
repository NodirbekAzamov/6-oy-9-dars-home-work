import React from 'react'
import { Link } from "react-router-dom";
import "./style.scss"

export default function Home() {
    return (
        <div className='container'>
            <div className='header'>
                <h6>logo</h6>
                <ul className='list'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className='menu'>
                    <div className='change'>
                        <div className='change_1'></div>
                        <div className='change_2'></div>
                        <div className='change_3'></div>
                    </div>
                    <p>Menu</p>
                </div>
            </div>
            <button className='btn btn-info'>
                <Link to="/login" className='header_link'> Login </Link>
            </button>
        </div>
    )
}


