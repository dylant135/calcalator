import React from 'react'

export default function Buttons(props) {

    function handleClick(event) {
        const num = event.target.innerText
        console.log(num)
        props.setCurrent(prevState => {
            if(Array.isArray(prevState)) {
                return (
                    [...prevState, num]
                )
            } else {
                return (
                    [num]
                )
            }
            
        })
    }

    function evaluate() {
        props.setPrev(props.current)
        props.setCurrent(prevState => {
            const nums = prevState.join('')
            return (
                eval(nums)
            )
        })
    }

    function clear() {
        props.setPrev('')
        props.setCurrent('')
    }

    return (
        <div className='buttonsContainer'>
            <button onClick={handleClick} type='button'>1</button>
            <button onClick={handleClick} type='button'>2</button>
            <button onClick={handleClick} type='button'>3</button>
            <button onClick={handleClick} type='button'>+</button>
            <button onClick={handleClick} type='button'>4</button>
            <button onClick={handleClick} type='button'>5</button>
            <button onClick={handleClick} type='button'>6</button>
            <button onClick={handleClick} type='button'>-</button>
            <button onClick={handleClick} type='button'>7</button>
            <button onClick={handleClick} type='button'>8</button>
            <button onClick={handleClick} type='button'>9</button>
            <button onClick={handleClick} type='button'>/</button>
            <button onClick={evaluate} className='eaqual'>=</button>
            <button onClick={clear} className='clear'>Clear</button>
            <button onClick={handleClick} type='button'>0</button>
            <button onClick={handleClick} type='button'>*</button>
            
        </div>
    )
}