import React from 'react';
import styles from './loginPage.module.scss';

import {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

const LoginPage = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    function login() {
        setIsAuth(true);
    }

    return(
    <div className={styles.loginWrapper}>
        <input type="email" name="" id="" className={styles.input}/>
        <input type="password" name="" id="" className={styles.input}/>

        <Link to='/content' onClick={login} className={styles.button}>Войти</Link>
    </div>
)}

export default LoginPage;