import React, { useState, useEffect } from 'react';

function ReactHooks() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `you click ${count} times`
    }, [count]);

    return (
        <div>
            <h2>React Hooks</h2>

            <p>you clicked {count}</p>
            <button onClick={() => setCount(count + 1)}>
                increase count
            </button>
        </div>
    )
}

export default ReactHooks;