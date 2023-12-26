import React, { useState } from 'react'
import { createContext } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import "./style.scss"
export const CountContext = createContext()
export default function Appcomponent() {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)
    
    return (
        <CountContext.Provider value={{count, setCount, count2, setCount2, count3, setCount3, count4, setCount4} }>
            <div className='boxs'>

                <div className='box'>
                    <div className='app_count'>
                        <h2>+</h2>
                        <h2>-</h2>
                    </div>

                    <div className='app_comp'>

                        <div className='comp1'>
                            <Component1 />
                        </div>

                        <div className='comp2'>
                            <Component2 />
                        </div>

                    </div>

                </div>
                
            </div>
        </CountContext.Provider>
    )
}
