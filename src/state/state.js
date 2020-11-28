import {useState} from 'react'; 

export function useLoginState() {
    const [isAuth, setIsAuth] = useState(true);

    return({ isAuth, setIsAuth })
}
