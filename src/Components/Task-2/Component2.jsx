import React from 'react'
import Ccomp from './Ccomp'
import Dcomp from './Dcomp'
import "./style.scss"
export default function Component2() {
    return (
        <div className=' '>
            <h3 className='text-center'>2 Component</h3>
            <div>
                <Ccomp />
            </div>
            <div>
                <Dcomp />
            </div>
        </div>
    )
}
