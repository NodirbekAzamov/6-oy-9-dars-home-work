import React from 'react'
import "./style.scss"
import { useContext } from 'react'
import { CountContext } from './Appcomponent'
export default function Bcomp() {
    const { count3, setCount3 } = useContext(CountContext)
    return (
        <div className='bcomp'>
            <h5>B component</h5>
            <div>
                <h4>Count: {count3}</h4>
                <button onClick={() => setCount3(prev => prev + 1)} className='btn btn-primary '>+</button>
                <button onClick={() => setCount3(prev => prev - 1)} className='btn btn-primary mx-2'>-</button>
            </div>
        </div>
    )
}
