// Code Keypad Component Here
import React from 'react';

function Keypad () {
    const text = () =>{
        console.log ('Entering password...')
    }
    return (
        <input type ="password" onChange={text}/>
    )
}



export default Keypad;
