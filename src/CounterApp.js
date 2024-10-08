import React, {useState} from "react";
import { useState } from 'react';

const initialCounters = [
    {
        id: 123,
        value: 10
    },
    {
        id: 456,
        value: 200
    },
    {
        id: 'sdfg',
        value: -300
    }
]
    function CounterApp() {

    const [counts, setCounts] = useState(initialCounters);

    const minus = (id) => {
        const updatedCounts = counts.map(el => el.id === id ? { ...el, value: el.value - 1 } : el)
        setCounts(updatedCounts)
    };

    const plus = (id) => {
        const updatedCounts = counts.map(el => el.id === id ? { ...el, value: el.value + 1 } : el)
        setCounts(updatedCounts)
        setCounts(updatedCounts)
    };

    const addCounter = () => {
        const newCount = {
            id: Math.random(),
            value: 0
        };

        setCounts([...counts, newCount])
    };

    return (
    <div className="App">
        <ul>
            {counts.map(el => (
                <li key={el.id}>
                    <button onClick={() => minus(el.id)}>Minus</button>
                    {el.value}
                    <button onClick={() => plus(el.id)}>Plus</button>
                </li>
            ))}
        </ul>

        <hr/>

        <button onClick={addCounter}>Add counter</button>
    </div>
);
}

export default CounterApp;

