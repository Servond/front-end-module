import React from 'react';
import useCounter from './components/counterHooks';

import userProfile from './json/userProfile.json';

function ReactHooks() {
    const [count, increments, decrements] = useCounter(0, 1)
    const { name, age } = userProfile;
    return (
        <div>
            <h2>React Hooks</h2>
            <h4>{name}</h4>
            <h4>{age}</h4>
            <p>you clicked {count}</p>
            <button onClick={increments}>
                increase count
            </button>
            <button onClick={decrements}>
                decrease count
            </button>
        </div>
    )
}

export default ReactHooks;