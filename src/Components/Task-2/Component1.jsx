import React from 'react'
import Acomp from './Acomp'
import Bcomp from './Bcomp'
import "./style.scss"
export default function Component1() {
    return (
        <div className=''>
            <h3 className='text-center'>1 Component</h3>
            <div className=''>
                <Acomp />
            </div>
            <div>
                <Bcomp />
            </div>
        </div>
    )
}
