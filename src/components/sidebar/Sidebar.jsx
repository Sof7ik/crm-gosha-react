import React from 'react';
import styles from "./sidebar.module.scss";
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { ProfileOutlined, UserOutlined, TeamOutlined, TagOutlined} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class Sidebar extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            collapsed: false,
          };
        
          this.onCollapse = collapsed => {
            this.setState({ collapsed });
          };    
          window.addEventListener("resize", () => {
            if (window.innerWidth <= 600)
            {
                this.setState({ collapsed: true })
            }
        });
    }

    componentWillMount() {

        if (window.innerWidth <= 600)
        {
            this.state.collapsed = true;
        }
    }

    render()
    {
        return (
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/manager" className={`${styles.menuItem}`} activeClassName={`${styles.menuItemActive}`}> Личный кабинет </NavLink>
                </Menu.Item>

                <Menu.Item key="2" icon={<TagOutlined />}>
                    <NavLink to="/brands" className={`${styles.menuItem}`} activeClassName={`${styles.menuItemActive}`}>Бренды</NavLink>
                </Menu.Item>
                    

                <Menu.Item key="3" icon={<ProfileOutlined />}>
                    <NavLink to="/goods" className={`${styles.menuItem}`} activeClassName={`${styles.menuItemActive}`}>Товары</NavLink>
                </Menu.Item>

                <Menu.Item key="4" icon={<TeamOutlined />}>
                    <NavLink to="/bloggers" className={`${styles.menuItem}`} activeClassName={`${styles.menuItemActive}`}>Блоггеры</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>);
    }
}


export default Sidebar;