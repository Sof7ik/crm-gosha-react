import React from 'react';
import styles from "./Sidebar.module.css";
import {NavLink} from 'react-router-dom';

export default function Sidebar () {
    return (
        <nav className={styles.nav}>
            <NavLink to="/manager" className={`${styles.menuItem}`} activeClassName={`${styles.menuItemActive}`}> Личный кабинет </NavLink>
            <NavLink to="/brands" className={`${styles.menuItem}`} activeClassName={`${styles.menuItemActive}`}>Бренды</NavLink>
            <NavLink to="/goods" className={`${styles.menuItem}`} activeClassName={`${styles.menuItemActive}`}>Товары</NavLink>
            <NavLink to="/bloggers" className={`${styles.menuItem}`} activeClassName={`${styles.menuItemActive}`}>Блоггеры</NavLink>
            {/* <NavLink to="/manager" className={`${styles.menuItem}`}>Отгрузки</NavLink>
            <NavLink to="/manager" className={`${styles.menuItem}`}>Публикации</NavLink> */}

            <NavLink to="/manager" className={`${styles.menuItem}`}>выход</NavLink>
        </nav>
    )
}