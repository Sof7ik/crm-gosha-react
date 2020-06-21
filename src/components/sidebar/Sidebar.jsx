import React from 'react';
import styles from "./sidebar.module.scss";
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';

  
const { Header, Sider, Content } = Layout;

export default function Sidebar () {
    return (
        <Sider>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <NavLink to="/manager" className={`${styles.menuItem}`} activeClassName={`${styles.menuItemActive}`}> Личный кабинет </NavLink>
                </Menu.Item>

                <Menu.Item key="2">
                    <NavLink to="/brands" className={`${styles.menuItem}`} activeClassName={`${styles.menuItemActive}`}>Бренды</NavLink>
                </Menu.Item>
                    

                <Menu.Item key="3">
                    <NavLink to="/goods" className={`${styles.menuItem}`} activeClassName={`${styles.menuItemActive}`}>Товары</NavLink>
                </Menu.Item>

                <Menu.Item key="4">
                    <NavLink to="/bloggers" className={`${styles.menuItem}`} activeClassName={`${styles.menuItemActive}`}>Блоггеры</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}