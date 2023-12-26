import React from 'react'
import { useContext } from 'react'
import { CountContext } from './Appcomponent'
export default function Dcomp() {
    const { count, setCount } = useContext(CountContext)
    return (
        <div className='dcomp'>
            <h5>D component</h5>
            <div>
                <h4>Count: {count}</h4>
                <button onClick={() => setCount(prev => prev + 1)} className='btn btn-primary '>+</button>
                <button onClick={() => setCount(prev => prev - 1)} className='btn btn-primary mx-2'>-</button>
            </div>
        </div>
    )
}
