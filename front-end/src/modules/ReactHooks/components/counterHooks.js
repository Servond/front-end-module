import { useState, useEffect } from 'react';

function useCounter(val, step) {
    const [count, setCount] = useState(val);

    function increments() {
        setCount(count + 1);
    }

    function decrements() {
        if (count > 0) setCount(count - 1);
    }

    return [count, increments, decrements];
}

export default useCounter;