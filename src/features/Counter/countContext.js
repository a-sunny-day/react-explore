import React, { createContext, useContext, useMemo, useReducer } from 'react';

const countContext = createContext();

let countState = {
    count: 0
};

function countReducer(state, action) {
    if (action.type === "INC") {
        return { count: state.count + 1 };
    } else {
        throw Error('wrong action type');
    }
}

export function CountProvider(props) {
    const [state, dispatch] = useReducer(countReducer, { ...countState });
    const value = useMemo(() => [state, dispatch], [state]);
    return <countContext.Provider value={value} {...props} />
}

export function useCount() {
    const context = useContext(countContext);
    if (!context) {
        throw new Error('useCount must be used within a CountProvider');
    }
    const [state, dispatch] = context;

    const increment = () => dispatch({ type: 'INC' });

    return {
        state,
        dispatch,
        increment
    }
}