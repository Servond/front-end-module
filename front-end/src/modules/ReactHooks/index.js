import React, { useEffect } from 'react';
import useCounter from './components/counterHooks';

import userProfile from './json/userProfile.json';

import { Button, ButtonGroup, extendTheme } from '@chakra-ui/react';

const breakpoints = {
    sm: '300px',
    md: '760px',
    lg: '960px',
    xl: '1200px',
}

const theme = extendTheme({breakpoints});

function ReactHooks() {
    const [count, increments, decrements] = useCounter(0, 1)
    const { name, age } = userProfile;

    useEffect(() => {
        const item = localStorage.getItem('items');
        console.log(item);
    }, [])

    return (
        <div>
            <h2>React Hooks</h2>
            <h4>{name}</h4>
            <h4>{age}</h4>
            <p>you clicked {count}</p>
            <Button size="sm" variant="outline" onClick={increments}>
                increase count
            </Button>
            <Button onClick={decrements}>
                decrease count
            </Button>
        </div>
    )
}

export default ReactHooks;