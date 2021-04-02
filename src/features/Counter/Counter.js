import React from 'react';
import { CountProvider, useCount } from './countContext';

function CountButton() {
    const {
        state: { count },
        increment
    } = useCount();
    console.log("count button render");
    return <button onClick={increment}>{count}</button>
}

function CountDisplay() {
    const {
        state: { count }
    } = useCount();
    console.log("count display render");
    return <div>The current count is: <i>{count}</i></div>
}

function Line() {
    console.log('Line render');
    return <hr />
}

export default function Counter() {
    return (
        <div>
            <CountProvider>
                <Line />
                <CountDisplay />
                <CountButton />
            </CountProvider>
        </div>
    )
}