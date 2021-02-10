import React, {useState} from 'react';
import styles from './loginPage.module.scss';
import FetchData from "../../../FetchData/fetchData";

const LoginPage = (props) => {
    const fetchData = new FetchData();

    const [formData, setFormData] = useState({
        email: '', password: ''
    })

    const changeFormDataHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const loginHandler = async e =>
    {
        const userInfo = await fetchData.getUserForLogin(formData);
        console.log(userInfo);
    }

    return(
        <div className={styles.loginWrapper}>

            <span className={styles.logo}>CRM</span>
    
            <input 
                type="email" 
                name="email"
                id="userLogin"
                required
                placeholder='Введите EMAIL' 
                className={styles.input}
                onChange={changeFormDataHandler}
                autoComplete="off"/>
            <input 
                type="password" 
                name="password" 
                id="userPassword" 
                required
                placeholder='Введите пароль' 
                className={`${styles.input} ${styles.input}`}
                onChange={changeFormDataHandler}
                autoComplete="off"/>

            <input type="submit" value="ВОЙТИ" onClick={loginHandler}/>
        </div>
    )   
}

export default LoginPage;
