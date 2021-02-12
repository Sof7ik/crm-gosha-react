import {useState, useCallback, useEffect} from 'react';

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    const login = useCallback((token, id) => {
        setToken(token);
        setUserId(id);

        localStorage.setItem('userData', JSON.stringify({userId: userId, token: token}));
    }, [])

    const logout = () => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem('userData');
    }

    useEffect( () => {
        if (localStorage.getItem('userData'))
        {
            const data = JSON.parse(localStorage.getItem('userData'));
            login(data.token, data.userId);
        }
    }, [login])

    return {login, logout, token, userId}
}