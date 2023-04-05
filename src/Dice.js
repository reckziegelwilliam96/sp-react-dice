import React, { useState } from 'react';
import Die from './Die'
import "./Dice.css"

const Dice = ({title="Main Game", numDice=6, maxVal=20}) => {
    const [numbers, setNumbers] = useState(Array.from({ length: numDice }));
    const rollDice = () => (
        setNumbers(numbers => (
            numbers.map(n => Math.floor(Math.random() * maxVal) + 1)
        ))
    )
    return (
        <div className="Dice">
            <h2>{title}</h2>
            <div>
                {numbers.map(num => <Die val={num} />)}
            </div>
            <button onClick={rollDice}>Roll</button>
        </div>
    )
}

export default Dice;