import React, {createContext, useContext, useState} from "react";
import {useEffect, useCallback} from "react";
import axios from "axios";

let defaultToken = null;
if (typeof window !== "undefined") {
    defaultToken = localStorage.getItem('token');

}
const Context = createContext({
    user: null,
    token: defaultToken
});

function UserContext({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(defaultToken);

    useEffect(() => {
        if (token == null || token === 'null') {
            setToken(null);
            localStorage.removeItem('token');
            return;
        }

        if (token !== null && token !== 'null') {
            localStorage.setItem('token', `${token}`);
            axios.get('http://localhost:3001/profile', {
                headers: {
                    Authorization: 'Bearer ' + token //the token is a variable which holds the token
                }
            }).then(response => {
                setUser(response.data.user)
            })
        }
    }, [token]);

    const logOut = useCallback(() => {
        localStorage.removeItem('token');
        setUser(null);
    }, [])

    return (
        <Context.Provider value={{user, token, setUser, setToken, logOut}}>
            {children}
        </Context.Provider>
    );
}

export const useUser = () => useContext(Context);

export default UserContext;
