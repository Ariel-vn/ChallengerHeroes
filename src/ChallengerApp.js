import React, { useEffect, useReducer } from 'react';
import { authReducers } from './reducers/authReducers';
import { Context } from './reducers/Context';
import { AppRouter } from './router/AppRouter';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const ChallengerApp = () => {
    const [user, dispatch] = useReducer(authReducers, {}, init)
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);
    return (
        <>
            <Context.Provider value={{user,dispatch}}>
                <AppRouter />
            </Context.Provider>
        </>
    )
}
