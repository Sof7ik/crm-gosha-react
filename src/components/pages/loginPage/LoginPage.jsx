import React, {useState} from 'react';
import styles from './loginPage.module.scss';
import FetchData from "../../../FetchData/fetchData";

const fetchData = new FetchData();

const LoginPage = (props) => {

    const [formData, setFormData] = useState({
        email: '', password: ''
    })

    const changeFormDataHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const login = async (e) =>
    {
        console.log(formData);
        if (formData.email.trim() !== '')
        {
            if (formData.password.trim() !== '')
            {
                setTimeout(()=> {
                    fetchData.getUsers()
                        .then(users => {
                            console.log('users',users)
                            users.forEach( (user,index) => {
                                if (user.email === formData.email && user.password === formData.password)
                                {
                                    console.log(`Пользователь авторизовался. Имя - ${user.name}, фамилия - ${user.surname}`);
                                }
                                else if(index === users.length-1)
                                {
                                    console.log('Введены некоректные данные');
                                }
                            })
                        })
                }, 1000)
            } else
            {
              console.log('Пустой пароль');
            }
        } else
        {
            console.log('Пустой email');
        }
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

            <input type="submit" onClick={login} disabled={fetchData.isLoading} value="ВОЙТИ"/>
        </div>
    )   
}

export default LoginPage;
