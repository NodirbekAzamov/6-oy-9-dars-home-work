import React from 'react'
import { useContext } from 'react'
import { CountContext } from './Appcomponent'
export default function Ccomp() {
    const { count2, setCount2 } = useContext(CountContext)
    return (
        <div className='ccomp'>
            <h5>C component</h5>
            <div>
                <h4>Count: {count2}</h4>
                <button onClick={() => setCount2(prev => prev + 1)} className='btn btn-primary '>+</button>
                <button onClick={() => setCount2(prev => prev - 1)} className='btn btn-primary mx-2'>-</button>
            </div>
        </div>
    )
}
