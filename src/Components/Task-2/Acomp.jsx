import React from 'react'
import "./style.scss"
import { useContext } from 'react'
import { CountContext } from './Appcomponent'
export default function Acomp() {
    const { count4, setCount4 } = useContext(CountContext)
    return (
        <div className='acomp'>
            <h5>A component</h5>
            <div>
                <h4>count: {count4}</h4>
                <button onClick={() => setCount4(prev => prev + 1)} className='btn btn-primary '>+</button>
                <button onClick={() => setCount4(prev => prev - 1)} className='btn btn-primary mx-2'>-</button>
            </div>
        </div>
    )
}
